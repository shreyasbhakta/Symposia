# Symposia Community Bookstore (Frontend)

React + Vite + Tailwind frontend for Symposia. It can run as a standalone site and pull content from WordPress (symposia.us) via the WordPress REST API.

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- WordPress REST API (as a headless CMS/data source)

## Project layout

- `src/pages/` – Page routes (Home, Events, Community, Contact, etc.)
- `src/components/` – Shared UI components (Navbar, carousel, etc.)
- `src/assets/images.ts` – Central mapping for site images (logo, carousel, page images)
- `src/api/wordpress.ts` – WordPress REST API client + event mapping

## Local development

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

Output goes to `dist/`.

## Environment variables

Copy `.env.example` to `.env` and set your WordPress base URL:

```env
VITE_WORDPRESS_URL=https://symposia.us
```

## WordPress integration

This frontend reads content from WordPress using the REST API.

### REST API endpoints used

- Posts: `/wp-json/wp/v2/posts`
- Pages: `/wp-json/wp/v2/pages`
- Events (custom post type, recommended): `/wp-json/wp/v2/events`

### Events behavior in the app

The Events page:

- Fetches events from WordPress.
- Shows **only future events** when the API provides an event start date in custom fields.
- If no events are available after filtering, it shows: **“Stay Tuned!!”**
- Clicking **Learn More** opens a **popup** with event details (no redirect).
- If an event has no featured image, it shows the **Symposia logo** as the event image.

### How the app determines an “event date”

WordPress publish date is not the same as the event date, so the app looks for common custom-field keys in `meta` or `acf`, such as:

- `start_datetime`, `start_date_time`
- `event_start_datetime`, `event_start_date`
- `event_date` (supports `YYYY-MM-DD` and `YYYYMMDD`)
- `event_time` (optional, used to combine date + time)
- `location` / `event_location`

If your event start date fields exist and are exposed in REST responses, the app will filter events to only future ones.

### Recommended WordPress setup (Events CPT)

Create a custom post type called `events` and expose it to the REST API:

```php
add_action('init', function() {
  register_post_type('events', [
    'public'       => true,
    'show_in_rest' => true,
    'rest_base'    => 'events',
    'label'        => 'Events',
    'supports'     => ['title', 'editor', 'thumbnail', 'excerpt'],
  ]);
});
```

Then add your event fields (date/time/location) using either:

- WordPress `meta` fields (registered and exposed via REST), or
- ACF fields (also exposed via REST).

## Newsletter behavior

The newsletter “Subscribe” area is on the Contact page (`/contact#newsletter`).

- Clicking newsletter buttons from the site navigates to that section.
- Submitting the newsletter form opens an email draft (mailto) to request subscription.

If you later add a real newsletter provider (Mailchimp, Brevo, etc.) or a WordPress form endpoint, you can swap the mailto flow for a real API call.

## Deployment

You have two main deployment patterns:

### Option A (recommended): Headless WordPress + separate frontend hosting

- Keep WordPress at `symposia.us` as the CMS.
- Deploy this frontend separately (Netlify/Vercel/Cloudflare Pages).
- Set `VITE_WORDPRESS_URL=https://symposia.us`.

If the frontend is on a different domain (e.g. `app.symposia.us`), make sure WordPress allows CORS for REST API requests.

### Option B: Deploy the built frontend onto WordPress hosting

This is the “host the React build on your WordPress server” approach. It’s usually done on a **subdomain** so it doesn’t conflict with WordPress routing.

#### Steps

1. Build the site locally:

```bash
npm install
npm run build
```

2. Create a subdomain (recommended), for example:

- Frontend: `app.symposia.us`
- WordPress CMS/API stays at: `symposia.us`

3. Point the subdomain document root to a folder on your server, then upload **the contents** of `dist/` into that folder.

4. Configure SPA rewrites so React Router routes work on refresh.

Apache `.htaccess` (place in the same folder as `index.html`):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Nginx equivalent:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

5. Ensure WordPress REST API CORS allows your frontend origin if needed.

#### If you must deploy at the same domain as WordPress

If WordPress currently owns `symposia.us`, replacing it completely with a React SPA requires moving WordPress to another host/subdomain (e.g. `cms.symposia.us`) or configuring reverse proxy rules. This is doable but depends heavily on your hosting environment.

## GitHub notes

- `node_modules/` and `dist/` are ignored via `.gitignore`.
- Do not commit `.env` (it is ignored).

## Key files to know

- `index.html` – Sets the browser tab icon (favicon)
- `src/assets/images.ts` – All site image URLs
- `src/api/wordpress.ts` – WordPress REST API client + event mapping/filter support
- `src/pages/Events.tsx` – Events UI + popup + “Stay Tuned!!”

