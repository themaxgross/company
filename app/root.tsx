import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/server-runtime";

import Raleway100 from "@fontsource/raleway/100.css";
import Raleway200 from "@fontsource/raleway/200.css";
import Raleway300 from "@fontsource/raleway/300.css";
import Raleway400 from "@fontsource/raleway/400.css";
import Raleway500 from "@fontsource/raleway/500.css";
import Raleway600 from "@fontsource/raleway/600.css";
import Raleway700 from "@fontsource/raleway/700.css";
import Raleway800 from "@fontsource/raleway/800.css";
import Raleway900 from "@fontsource/raleway/900.css";

import Inter200 from "@fontsource/inter/200.css";
import Inter300 from "@fontsource/inter/300.css";
import Inter400 from "@fontsource/inter/400.css";
import Inter500 from "@fontsource/inter/500.css";
import Inter600 from "@fontsource/inter/600.css";
import Inter700 from "@fontsource/inter/700.css";

import styles from "./tailwind.css";

const Fonts = [
  Raleway100,
  Raleway200,
  Raleway300,
  Raleway400,
  Raleway500,
  Raleway600,
  Raleway700,
  Raleway800,
  Raleway900,
  Inter200,
  Inter300,
  Inter400,
  Inter500,
  Inter600,
  Inter700,
] as const;

export const links: LinksFunction = () => {
  const fontLinks = Fonts.map((font) => ({
    rel: "stylesheet",
    href: font,
  }));

  return [
    ...fontLinks,
    { rel: "stylesheet", href: styles },
    { rel: "icon", href: "/favicon.ico" },
  ];
};

const App = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className="font-inter">
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);
export default App;
