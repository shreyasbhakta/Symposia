/**
 * WordPress REST API client for Symposia Bookstore
 *
 * Setup:
 * 1. In project root, copy .env.example to .env and set:
 *    VITE_WORDPRESS_URL=https://symposia.us
 * 2. On WordPress: ensure REST API is enabled (it is by default).
 * 3. For events: register a custom post type "events" with show_in_rest => true,
 *    or use posts in a category and we'll fetch those.
 */

const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://symposia.us';
const API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`;

/** Normalized event shape used by the app */
export interface AppEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  /**
   * Optional event start time (ISO-8601). If present, the UI can filter to future events.
   * This should come from WordPress custom fields (meta/ACF) rather than publish date.
   */
  start?: string;
  link?: string;
}

/** Raw WordPress post/event from REST API (common fields) */
interface WPPost {
  id: number;
  date: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  link?: string;
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>;
    'wp:term'?: Array<Array<{ name?: string }>>;
  };
  meta?: Record<string, unknown>;
  acf?: Record<string, unknown>;
}

function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

function formatWpDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return iso;
  }
}

function readFirstString(obj: Record<string, unknown>, keys: string[]): string | undefined {
  for (const key of keys) {
    const v = obj[key];
    if (typeof v === 'string' && v.trim()) return v.trim();
    if (typeof v === 'number' && Number.isFinite(v)) return String(v);
  }
  return undefined;
}

function parseEventStartISO(meta: Record<string, unknown>, fallbackTime?: string): string | undefined {
  const raw = readFirstString(meta, [
    'start',
    'start_datetime',
    'start_date_time',
    'start_date',
    'event_start',
    'event_start_datetime',
    'event_start_date',
    'event_date',
    'date',
  ]);

  if (!raw) return undefined;

  const rawTrimmed = raw.trim();
  const time = fallbackTime?.trim();

  // ACF often stores dates as YYYYMMDD
  const yyyymmdd = /^\d{8}$/.test(rawTrimmed) ? rawTrimmed : undefined;
  const yyyyMmDd = /^\d{4}-\d{2}-\d{2}$/.test(rawTrimmed) ? rawTrimmed : undefined;

  const candidates: string[] = [];
  if (rawTrimmed.includes('T')) {
    candidates.push(rawTrimmed);
  } else if (yyyymmdd) {
    const y = yyyymmdd.slice(0, 4);
    const m = yyyymmdd.slice(4, 6);
    const d = yyyymmdd.slice(6, 8);
    candidates.push(`${y}-${m}-${d}${time ? ` ${time}` : ''}`.trim());
    candidates.push(`${y}-${m}-${d}`);
  } else if (yyyyMmDd) {
    candidates.push(`${yyyyMmDd}${time ? ` ${time}` : ''}`.trim());
    candidates.push(yyyyMmDd);
  } else {
    candidates.push(`${rawTrimmed}${time ? ` ${time}` : ''}`.trim());
    candidates.push(rawTrimmed);
  }

  for (const c of candidates) {
    const d = new Date(c);
    if (!Number.isNaN(d.getTime())) return d.toISOString();
  }

  return undefined;
}

/** Map a WordPress post/event object to AppEvent */
function mapWpPostToEvent(wp: WPPost, fallbackImageUrl: string): AppEvent {
  const title = wp.title?.rendered ? stripHtml(wp.title.rendered) : 'Event';
  const excerpt = wp.excerpt?.rendered ? stripHtml(wp.excerpt.rendered) : '';
  const content = wp.content?.rendered ? stripHtml(wp.content.rendered) : '';
  const description = excerpt || content.slice(0, 200) + (content.length > 200 ? '…' : '');

  const media = wp._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const image = media || fallbackImageUrl;

  const category =
    wp._embedded?.['wp:term']?.[0]?.[0]?.name ||
    (wp as WPPost & { event_type?: string }).event_type ||
    'Event';

  const meta = wp.meta || wp.acf || {};
  const time = (meta as { time?: string }).time ?? (meta as { event_time?: string }).event_time ?? 'TBD';
  const start = parseEventStartISO(meta, typeof time === 'string' ? time : undefined);
  const displayDateISO = start ?? wp.date;
  const location =
    (meta as { location?: string }).location ??
    (meta as { event_location?: string }).event_location ??
    'Symposia Bookstore';

  return {
    id: wp.id,
    title,
    date: formatWpDate(displayDateISO),
    time: String(time),
    location: String(location),
    description: description || 'Join us at Symposia.',
    image,
    category,
    start,
    link: wp.link,
  };
}

/** Fetch posts (e.g. for blog or events if you use a category) */
export async function fetchPosts(params?: {
  per_page?: number;
  page?: number;
  categories?: number;
  _embed?: boolean;
}) {
  const searchParams = new URLSearchParams();
  if (params?.per_page) searchParams.set('per_page', String(params.per_page));
  if (params?.page) searchParams.set('page', String(params.page));
  if (params?.categories) searchParams.set('categories', String(params.categories));
  if (params?._embed !== false) searchParams.set('_embed', '1');

  const res = await fetch(`${API_BASE}/posts?${searchParams}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

/** Fetch pages */
export async function fetchPages() {
  const res = await fetch(`${API_BASE}/pages`);
  if (!res.ok) throw new Error('Failed to fetch pages');
  return res.json();
}

/** Fetch a single page by slug */
export async function fetchPage(slug: string) {
  const res = await fetch(`${API_BASE}/pages?slug=${slug}`);
  if (!res.ok) throw new Error('Failed to fetch page');
  const data = await res.json();
  return data[0] ?? null;
}

/**
 * Fetch custom post type "events" from WordPress.
 * Your theme/plugin must register the CPT with:
 *   'show_in_rest' => true,
 *   'rest_base' => 'events'
 * Optional: use ACF or meta for time, location, category.
 */
export async function fetchEventsRaw(params?: { per_page?: number; page?: number }) {
  const searchParams = new URLSearchParams({ _embed: '1' });
  if (params?.per_page) searchParams.set('per_page', String(params.per_page));
  if (params?.page) searchParams.set('page', String(params.page));

  const res = await fetch(`${API_BASE}/events?${searchParams}`);
  if (!res.ok) return [];
  return res.json();
}

/**
 * Fetch events and map to app shape. If WordPress has no "events" CPT,
 * falls back to fetching recent posts (so you can use a category like "Events").
 */
export async function fetchEventsMapped(options: { fallbackImageUrl: string }): Promise<AppEvent[]> {
  let raw: WPPost[] = [];

  try {
    raw = await fetchEventsRaw({ per_page: 20 });
  } catch {
    raw = [];
  }

  if (!raw || raw.length === 0) {
    try {
      raw = await fetchPosts({ per_page: 10, _embed: true });
    } catch {
      return [];
    }
  }

  return raw.map((wp) => mapWpPostToEvent(wp, options.fallbackImageUrl));
}
