# Campfire Firm

Campfire Firm’s landing page, built with Vite, React, and TypeScript for Cloudflare Pages.

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` to type-check and generate the production site in `dist`. Run `npm run preview` to serve that build locally.

## Page content

- `src/App.tsx` contains the page copy, navigation, and contact links.
- `src/style.css` contains the responsive layout and visual styles.
- `loop.mp4` is the muted, looping hero video. Vite includes it in the production assets.
- `public/hero-poster.jpg` is a still from the video, shown while it loads or when reduced motion is preferred.
- `campfire_logo.svg` supplies the brand mark and favicon.

The hero includes a pause/play button and respects the visitor’s reduced motion preference. Contact links open an email to `hello@campfirefirm.com`.

## Cloudflare Pages

Connect this repository in **Workers & Pages** and set:

- Build command: `npm run build`
- Build output directory: `dist`

The `wrangler.jsonc` file also points Wrangler at the Pages build output for local preview or CLI deployment.
