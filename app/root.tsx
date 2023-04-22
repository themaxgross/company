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

import styles from "./tailwind.css";
import type { ReactNode } from "react";

import catBox from "~/images/victoria-alexandrova-My4pywVClEk-unsplash.jpg";
import Button from "~/components/Button";
import { ADOBE_FONTS_URL } from "~/constants/urls";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preload", href: ADOBE_FONTS_URL, as: "style" },
    { rel: "icon", href: "/favicon.ico" },
  ];
};

const AppLayout = ({ children }: { children: ReactNode }) => {
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
