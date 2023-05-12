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

import remixImageStyles from "remix-image/remix-image.css";
import Image from "~/components/Image";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: remixImageStyles },
    { rel: "stylesheet", href: ADOBE_FONTS_URL },
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

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <html lang="en">
          <head>
            <Meta />
            <Links />

            {/* Fixed link, meta values not managed by Remix */}
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <meta name="theme-color" content="#0e1c38" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@theleoji" />
            <meta name="twitter:creator" content="@theleoji" />
          </head>
          <body className="font-inter">
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <div className="w-screen h-screen flex flex-col justify-center items-center">
              <figure className="mb-8 flex flex-col-reverse">
                <Image
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
              <h1 className="text-5xl font-semibold font-futura mb-2 md:mb-4">
                Kitty! Where are you going?
              </h1>
              <h2 className="text-2xl font-regular font-raleway mb-4 md:mb-6">
                This page doesn't exist.
              </h2>
              <Link to="/">
                <Button>
                  <span className="text-sm font-semibold">Go Home</span>
                </Button>
              </Link>
            </div>
          </body>
        </html>
      );
    }
  }

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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold font-raleway mb-2 md:mb-4">
            Hiss! Hiss!
          </h1>
          <h2 className="text-2xl font-regular">Something went wrong.</h2>
        </div>
      </body>
    </html>
  );
}

export default function App() {
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Outlet />
      </body>
    </html>
  );
}
