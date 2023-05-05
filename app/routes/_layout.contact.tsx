import type { LoaderFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";
import type { V2_MetaFunction } from "@remix-run/react";
import TypeformIntakeForm from "~/components/forms/typeform/IntakeForm";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Contact | Leo Ji LLC",
    },
    {
      name: "description",
      content:
        "Let's get started on creating the purr-fect website for your business.",
    },
  ];
};

export default function Contact() {
  return (
    <>
      <h1
        className="text-4xl font-semibold font-raleway tracking-tight text-gray-900 sm:text-5xl
                              dark:text-brand-white"
      >
        Contact
      </h1>

      <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-brand-white">
        Let's get started on creating the purr-fect website for your business.
      </p>
      <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-brand-white">
        You can complete the form below, or email me at{" "}
        <a
          href="mailto:hello@leoji.company"
          className="text-brand-primary hover:text-brand-primary-600 dark:text-brand-primary-200 dark:hover:text-brand-primary-100"
        >
          hello@leoji.company
        </a>
      </p>
      <TypeformIntakeForm />
    </>
  );
}
