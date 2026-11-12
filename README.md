# Leo Ji

The site is a React app built with Vite and the Cloudflare Vite plugin, and deployed as static assets on Cloudflare Workers. The `/`, `/contact`, and `/pricing` pages have separate HTML entry points for their metadata; React renders their content in the browser, so JavaScript is required to view it. Other paths return 404 rather than falling back to the home page.

## Development

Install dependencies with `npm ci`, then run:

```sh
npm run dev
```

Open the URL printed by Vite. Run `npm run typecheck` to check TypeScript.

## Deployment

Authenticate Wrangler with `npm exec wrangler login`, then build and deploy with:

```sh
npm run deploy
```

Run `npm run start` to build and preview the production assets locally in the Workers runtime, or `npm run preview` to preview an existing build.
