import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useRouteError,
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
import type { ReactNode } from "react";

import catBox from "~/images/victoria-alexandrova-My4pywVClEk-unsplash.jpg";
import Button from "~/components/Button";

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

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/wuf0dhh.css"
          type="text/css"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0e1c38" />
        <Meta />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@theleoji" />
        <meta name="twitter:creator" content="@theleoji" />
        <Links />

        {/* Fixed links not managed by Remix */}

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
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <AppLayout>
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <figure className="mb-8 flex flex-col-reverse">
              <img
                src={catBox}
                alt="Cat in a box"
                className="w-full max-w-xl h-auto py-1"
              />
              <figcaption className="text-sm font-regular text-gray-500">
                Photo by{" "}
                <a href="https://unsplash.com/@vicaleksa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Victoria Alexandrova
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/photos/My4pywVClEk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </figcaption>
            </figure>
            <h1 className="text-4xl font-semibold font-raleway mb-2 md:mb-4">
              Kitty! Where are you going?
            </h1>
            <h2 className="text-2xl font-regular mb-2 md:mb-4">
              This page doesn't exist.
            </h2>
            <Link to="/">
              <Button>
                <span className="text-sm font-semibold">Go Home</span>
              </Button>
            </Link>
          </div>
        </AppLayout>
      );
    }

    return (
      <AppLayout>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold font-raleway mb-2 md:mb-4">
            Hiss!
          </h1>
          <h2 className="text-2xl font-regular">Something went wrong.</h2>

          <p className="text-lg font-regular text-red-600 mt-2 md:mt-3">
            Here's what we know:
            <br />
            <pre>{error ? JSON.stringify(error, null, 2) : null}</pre>
          </p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold font-raleway mb-2 md:mb-4">
          Hiss! Hiss!
        </h1>
        <h2 className="text-2xl font-regular">Something went wrong.</h2>
      </div>
    </AppLayout>
  );
}

export default function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
