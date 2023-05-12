import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/server-runtime";

import styles from "./tailwind.css";

import remixImageStyles from "remix-image/remix-image.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: remixImageStyles },
    { rel: "icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ];
};

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        {/* Fixed link, meta values not managed by Remix */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0e1c38" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@theleoji" />
        <meta name="twitter:creator" content="@theleoji" />
      </head>
      <body className="font-inter">
        <Outlet />
        <ScrollRestoration />
        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
