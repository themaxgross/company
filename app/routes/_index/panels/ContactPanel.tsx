import React from "react";

import Panel from "~/components/Panel";
import { useForm } from "react-hook-form";
import { useSearchDebugParam } from "~/hooks/useSearchDebugParam";

import { HiPencil } from "react-icons/hi2";

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
            className="text-brand-primary dark:text-brand-primary-300 hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
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
  const { register, handleSubmit } = useForm();

  return (
    <Panel className="">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-16">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-3xl sm:tracking-tight lg:text-4xl mb-3 md:mb-6">
          Let's get started.
        </h2>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="mb-5 md:mb-6 lg:mb-8 space-y-3 md:space-y-4 lg:space-y-5"
        >
          <div className="mb-2 md:mb-4 xl:mb-5">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                px-2 md:px-4
                "
                placeholder="Jane Doe"
                {...register("name", { required: true })}
              />
            </div>
          </div>

          <div className="mb-2 md:mb-4 xl:mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                className="block w-full rounded-md border-0 py-1.5
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                px-2 md:px-4
                "
                placeholder="you@example.com"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="mb-2 md:mb-4 xl:mb-5">
            <label
              htmlFor="comment"
              className="block text-sm font-medium leading-6"
            >
              Add your comment
            </label>
            <div className="mt-2">
              <textarea
                rows={4}
                id="comment"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                {...register("comment", { required: true })}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-brand-primary dark:bg-brand-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Panel>
  );
}

export default function ContactPanel() {
  const debug = useSearchDebugParam();

  if (debug) {
    return <ContactFormPanel />;
  }
  return <ContactFormlessPanel />;
}
