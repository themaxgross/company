# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

Local development uses Remix's Vite server with Cloudflare's Workers runtime proxy:

```sh
# start the Remix development server
pnpm dev
```

Open the URL printed by Vite to view the app.

## Deployment

The app is deployed to Cloudflare Workers with static assets.

Create a Cloudflare account if needed, then authenticate Wrangler with `pnpm exec wrangler login`.

Build and deploy with:

```sh
pnpm deploy
```

Run `pnpm start` for a local production preview; it builds automatically.
