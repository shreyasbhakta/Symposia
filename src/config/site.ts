/**
 * WordPress site origin (API + media). Set VITE_WORDPRESS_URL in .env (e.g. https://symposia.us).
 */
const DEFAULT_WORDPRESS_URL = 'https://symposia.us';

export function getWordPressBaseUrl(): string {
  const raw = import.meta.env.VITE_WORDPRESS_URL;
  if (raw === undefined || raw === '') {
    return DEFAULT_WORDPRESS_URL;
  }
  return String(raw).replace(/\/$/, '');
}

/** Base URL for WordPress uploads (media library). */
export function getWordPressUploadsBase(): string {
  return `${getWordPressBaseUrl()}/wp-content/uploads`;
}

/** Same as getWordPressBaseUrl — for API client compatibility. */
export const WORDPRESS_URL = getWordPressBaseUrl();
