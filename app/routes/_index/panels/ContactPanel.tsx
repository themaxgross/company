import React from "react";

import Panel from "~/components/Panel";
import { useSearchDebugParam } from "~/hooks/useSearchDebugParam";

import { HiPencil } from "react-icons/hi2";
import TypeformIntakeForm from "~/components/forms/typeform/IntakeForm";

function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full max-w-5xl mx-auto border-t-2 border-brand-primary dark:border-brand-white" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-brand-primary border-x-4 border-brand-white dark:border-brand-primary dark:bg-brand-primary-700   p-2 text-brand-white">
          <HiPencil className="h-5 w-5 text-brand-white " aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

export function ContactFormlessPanel() {
  return (
    <Panel className="lg:text-center">
      <Divider />
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <h2 className="text-2x font-raleway font-bold text-gray-900 dark:text-gray-200 sm:text-3xl sm:tracking-normal lg:text-4xl mb-3 md:mb-6">
          Ready to create something great?
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-5 md:mb-6 lg:mb-8 text-lg md:text-xl tracking-loose">
          Paw me at{" "}
          <a
            href="mailto:hello@leoji.company"
            className="text-brand-primary dark:text-brand-primary-200 hover:text-brand-primary-600 dark:hover:text-brand-primary-100"
          >
            hello@leoji.company
          </a>
          .
        </p>
      </div>
    </Panel>
  );
}

export function ContactFormPanel() {
  return (
    <Panel>
      <Divider />
      <TypeformIntakeForm />
    </Panel>
  );
}

export default function ContactPanel() {
  const debug = useSearchDebugParam();

  if (!debug) {
    return (
      <>
        <a id="contact" />
        <ContactFormPanel />
      </>
    );
  }

  return (
    <>
      <a id="contact" />
      <ContactFormlessPanel />
    </>
  );
}
