# Deploy Symposia: React as WordPress Theme (Shared Hosting)

This project uses the **React as a custom theme** approach. WordPress still powers the site, but the active theme is a thin shell that loads your React UI. The WordPress REST API is unchanged; the React app is coupled to it and runs as the main front-end.

Best for: **shared WordPress hosting** (Bluehost, SiteGround, etc.) where you can’t edit Nginx/Apache.

---

## 1. Build the React app

On your local machine, in the project root:

```bash
npm install
npm run build
```

This produces a **`dist`** folder with:

- `dist/index.html`
- `dist/assets/` (compiled `.js` and `.css` with hashed names)

---

## 2. Create the theme on the server

On your WordPress server, go to **`wp-content/themes/`** and create a new folder, e.g. **`react-main-ui`**.

Copy the entire **`wordpress-theme/react-main-ui`** folder from this repo into **`wp-content/themes/react-main-ui`**, so you have:

- `wp-content/themes/react-main-ui/style.css`
- `wp-content/themes/react-main-ui/functions.php`
- `wp-content/themes/react-main-ui/index.php`
- `wp-content/themes/react-main-ui/404.php`
- `wp-content/themes/react-main-ui/app-shell.php`
- `wp-content/themes/react-main-ui/assets/` (empty at first)

---

## 3. Upload React assets into the theme

Copy the **contents** of your local **`dist/assets`** folder into the theme’s **`assets`** folder on the server:

- **From:** `dist/assets/*` (all `.js` and `.css files)
- **To:** `wp-content/themes/react-main-ui/assets/`

So on the server you have e.g.:

- `wp-content/themes/react-main-ui/assets/index-xxxxx.js`
- `wp-content/themes/react-main-ui/assets/index-xxxxx.css`

The theme’s `functions.php` uses PHP `glob()` to find these files and enqueue them; no need to edit filenames.

---

## 4. Activate the theme

In WordPress admin:

1. Go to **Appearance → Themes**.
2. Find **React Main UI** and click **Activate**.

---

## 5. Catch-all routing (SPA)

The theme’s `functions.php` already includes a **template_redirect** hook that sends all front-end requests (except `/wp-admin`, `/wp-json`, `/wp-content`, `/wp-includes`, `/wp-login`) to the React app shell with a **200** status. So:

- **symposia.us/** → React app (home)
- **symposia.us/events** → same shell, React Router shows Events
- **symposia.us/about** → same shell, React Router shows About
- **symposia.us/wp-json/...** → unchanged WordPress REST API
- **symposia.us/wp-admin** → unchanged WordPress admin

No Nginx/Apache or .htaccess changes are required; everything is done inside the theme.

---

## 6. API and env

The React app talks to WordPress via **`VITE_WORDPRESS_URL`** (see `src/api/wordpress.ts`). Default is **`https://symposia.us`**. Because the theme is served from the same domain, you usually don’t need to set this. If WordPress is on a different origin (e.g. a subdomain), set that URL when building:

```bash
VITE_WORDPRESS_URL=https://yoursite.com npm run build
```

Then copy the new **`dist/assets/*`** into the theme’s **`assets/`** again.

---

## 7. After code changes

1. Run **`npm run build`** locally.
2. Copy the new **`dist/assets/*`** into **`wp-content/themes/react-main-ui/assets/`** on the server (replace existing files).
3. Clear any WordPress or server cache and hard-refresh the site.

---

## Theme files (reference)

| File | Role |
|------|------|
| **style.css** | Theme header so WordPress recognizes the theme. |
| **functions.php** | Enqueues React JS/CSS from `assets/`; catch-all so all front-end URLs serve the React shell. |
| **app-shell.php** | Minimal HTML with `<div id="root">`, `wp_head()`, `wp_footer()`. |
| **index.php** | Loads `app-shell.php` (used when WordPress would normally show the front page). |
| **404.php** | Fallback; catch-all normally sends 200 + app-shell before this. |
| **assets/** | You put the built React `.js` and `.css` here. |

---

## Troubleshooting

- **Blank page**  
  Check that **`assets/`** contains the built `.js` and `.css` and that the theme is active. Look at the browser console for 404s or script errors.

- **404 on /events or /about**  
  The catch-all in `functions.php` should send those to the React shell. If you still get 404s, your host may be handling requests before WordPress; try adding a simple **.htaccess** in the site root that sends non-WP paths to `index.php` (many hosts do this by default for WordPress).

- **Old theme or wrong layout**  
  Ensure **React Main UI** is the active theme under **Appearance → Themes**.

- **API or CORS**  
  With the theme on the same domain as WordPress, the REST API is same-origin; no CORS change needed. If you later move the API to another domain, set **VITE_WORDPRESS_URL** and CORS on the API server.
