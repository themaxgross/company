import React from "react";
import Panel from "~/components/Panel";
import Button from "~/components/Button";
import { Link } from "@remix-run/react";

import { FaEnvelopeOpenText } from "react-icons/fa";

export default function IntroAboutPanel() {
  return (
    <Panel>
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="">
          <div>
            <h2 className="text-xl md:text-2xl xl:text-3xl mb-3 md:mb-5 font-semibold tracking-tight">
              Premium services to bring your business to the web.
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-12 sm:py-18 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl font-medium font-raleway tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl">
            Ready to find out how to supercharge your business online?
          </h2>
          <div className="mt-6 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link to="contact">
              <Button className="flex flex-row justify-center items-center">
                <FaEnvelopeOpenText className="mr-2" />
                <span>Get in touch</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Panel>
  );
}
