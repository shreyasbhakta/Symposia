# Keep GitHub in sync with your server

You have three common patterns. Pick one (or combine).

---

## 1. GitHub Actions → build → upload (recommended)

**Flow:** Every push to `main` (or a `deploy` branch), GitHub builds the React app and **rsync/SCPs** `dist/assets/` to your host (e.g. `wp-content/themes/react-main-ui/assets/`).

**Pros:** No Node.js needed on the server; one source of truth (GitHub).  
**Cons:** You must add **SSH deploy key** (or passwordless SSH) and **secrets** in the repo.

### Steps

1. On the server, create a **deploy user** or use your SSH user. Add your **public** key to `~/.ssh/authorized_keys` (or generate a **deploy key** only for this repo).
2. In GitHub: **Repo → Settings → Secrets and variables → Actions** add:
   - `SSH_HOST` – e.g. `symposia.us` or server IP  
   - `SSH_USER` – e.g. `symposia` or `deploy`  
   - `SSH_PRIVATE_KEY` – full private key (PEM), including `-----BEGIN...` lines  
   - `VITE_WORDPRESS_URL` – e.g. `https://wp.symposia.us`  
   - `REMOTE_THEME_ASSETS_PATH` – e.g. `/home/symposia/public_html/wp-content/themes/react-main-ui/assets`
3. Enable the workflow in **`.github/workflows/deploy-theme-assets.yml`** (see repo). Push to `main` to trigger a deploy.

After that, **every merge/push to `main`** updates the live theme assets automatically.

---

## 2. Git on the server (`git pull`)

**Flow:** The server has a **clone** of the repo. You SSH in and run `git pull`, then `npm ci && npm run build`, then copy `dist/assets/*` into the theme (or use a small script).

**Pros:** Simple mental model.  
**Cons:** Server needs **Node + npm**; you must not expose `.env` with secrets in the repo (use server-side `.env` or export vars before `npm run build`).

```bash
cd ~/symposia-frontend   # your clone path
git pull origin main
export VITE_WORDPRESS_URL=https://wp.symposia.us
VITE_DEPLOY_TARGET=root npm ci && npm run build
rsync -av --delete dist/assets/ /path/to/wp-content/themes/react-main-ui/assets/
```

You can run this **manually** after each update, or use **cron** + a script (less ideal than Actions).

---

## 3. Host “Git deploy” (if your provider supports it)

Some hosts (Kinsta, Pantheon, Plesk Git, etc.) let you **connect a Git repo** and pull on each push. Usually they deploy **WordPress** or static files, not always a custom Node build. Check your host’s docs; you may still build in GitHub Actions and only deploy the **built** `dist/assets` folder.

---

## Quick comparison

| Method | Build where? | Typical trigger |
|--------|----------------|-----------------|
| **GitHub Actions + rsync** | GitHub | Push to `main` |
| **Git pull on server** | Server | SSH + manual/cron |
| **Host Git integration** | Varies | Push (host pulls) |

---

## Safety tips

- **Never commit** `.env` with production secrets; use **GitHub Secrets** for `VITE_WORDPRESS_URL` in Actions.
- **Restrict** the SSH key to only the directories you need (e.g. theme `assets/`).
- Use a **`deploy` branch** if you don’t want every push to `main` to go live; trigger the workflow only on that branch.

---

## Files in this repo

- **`.github/workflows/deploy-theme-assets.yml`** – example workflow (disabled until you set secrets and uncomment/adjust paths).
