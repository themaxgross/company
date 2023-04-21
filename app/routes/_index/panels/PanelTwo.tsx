import React from "react";
import Panel from "~/components/Panel";
import Button from "~/components/Button";
import { Link } from "@remix-run/react";

import { FaEnvelopeOpenText } from "react-icons/fa";

export default function PanelTwo() {
  return (
    <Panel>
      <div className="max-w-3xl mx-auto py-8 md:py-12">
        <div className="">
          <div>
            <h2 className="text-xl md:text-2xl xl:text-3xl mb-3 md:mb-5 font-semibold tracking-tight">
              I'm Leo Ji, a web developer and designer based in Chicago.
            </h2>
            <p className="text-md md:text-xl mb-2 md:mb-4">
              Having everything from simple landing pages to complex
              applications, I am passionate about building blazing fast websites
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
            <Link to="mailto:hello@leoji.company">
              <Button className="flex flex-row justify-center items-center">
                <FaEnvelopeOpenText className="mr-2" />
                Email me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Panel>
  );
}
