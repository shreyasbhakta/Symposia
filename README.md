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



## Key files to know

- `index.html` – Sets the browser tab icon (favicon)
- `src/assets/images.ts` – All site image URLs
- `src/api/wordpress.ts` – WordPress REST API client + event mapping/filter support
- `src/pages/Events.tsx` – Events UI + popup + “Stay Tuned!!”

