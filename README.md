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

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the build command as `pnpm build` and the build output directory as `build/client`.
