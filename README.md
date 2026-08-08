# MatterLog Website

Static marketing site for **MatterLog** (GitHub Pages ready).

## Local preview

```bash
cd MatterLogWebSite
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

**Option A — this folder is the Pages root** (recommended if the site lives in its own repo):

1. Push `MatterLogWebSite` contents to the repo root (or set Pages source to `/` on `main`).
2. Settings → Pages → Deploy from branch → `/ (root)`.

**Option B — monorepo subdirectory:**

1. Settings → Pages → Deploy from branch → folder `/MatterLogWebSite`  
   (If GitHub only offers `/` or `/docs`, either move this site to `/docs` or use a GitHub Action to publish `MatterLogWebSite`.)

All asset paths are **relative** (`assets/...`), so the site works from a subdirectory as long as you open pages under that path.

## Replace placeholder images

Put real files here (same names):

| File | Use |
| --- | --- |
| `assets/images/logo.png` | App / site logo (square, transparent or navy `#0B1F33`) |
| `assets/images/screenshot-hero.png` | Hero phone screenshot |
| `assets/images/screenshot-today.png` | Today tab |
| `assets/images/screenshot-matter.png` | Matter detail |
| `assets/images/screenshot-record.png` | Recording screen |

Until those files exist, the page shows a dashed placeholder with the **filename** so you know what to drop in.

Suggested export sizes:

- Logo: 1024×1024 PNG
- Screenshots: portrait iPhone, ~1290×2796 or similar

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing (how it works + feature details) |
| `contact.html` | Contact us |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms of Use |

## Before App Store submission

1. Support email on the site is `abecheng@live.cn` (update App Store Connect to match if needed).
2. Paste App Store URL into the Download buttons on `index.html`.
3. Have counsel review Privacy / Terms if needed (governing law section is a starting draft).
4. In App Store Connect → App Privacy / Privacy Policy URL → point to:  
   `https://<your-pages-host>/privacy.html`
5. Support URL / Contact can point to:  
   `https://<your-pages-host>/contact.html`
