import React from "react";

export default function PanelTwo() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="">
        <div>
          <h2 className="text-xl md:text-2xl xl:text-3xl mb-3 md:mb-5 font-semibold tracking-tight">
            I'm Leo Ji, a web developer and designer based in Chicago.
          </h2>
          <p className="text-md md:text-xl mb-2 md:mb-4">
            I've built everything from simple landing pages to complex
            applications. I'm passionate about building blazing fast websites
            and delivering delightful designs for the web, one cat at a time.
          </p>
          <p className="text-md md:text-xl mb-2 md:mb-4">
            Cats not included with most projects.
          </p>
          <p className="text-md md:text-xl mb-2 md:mb-4">
            I'm currently available for hire. If you're interested in working
            together, please{" "}
            <a
              href="mailto:hello@leoji.company"
              className="text-brand-primary-800 hover:text-brand-primary-500 dark:text-brand-primary-200 dark:hover:text-brand-primary-500"
            >
              email me
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-12 sm:py-18 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-medium font-raleway tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl">
          Ready to find out how to supercharge your business online?
        </h2>
        <div className="mt-6 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="mailto:hello@leoji.company"
            className="rounded-md bg-brand-primary-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
            hover:bg-brand-primary-500
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-indigo-600"
          >
            Email me
          </a>
        </div>
      </div>
    </div>
  );
}
