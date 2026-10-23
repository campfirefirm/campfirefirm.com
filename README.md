# Campfire Firm

Vite + React starter for Cloudflare Pages.

## Local development

```sh
npm install
npm run dev
```

## Cloudflare Pages

Connect this repository in **Workers & Pages** and set:

- Build command: `npm run build`
- Build output directory: `dist`

The `wrangler.jsonc` file also points Wrangler at the Pages build output for local preview or CLI deployment.
