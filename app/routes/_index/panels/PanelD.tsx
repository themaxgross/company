import React from "react";
import Panel from "~/components/Panel";

import {
  HiPhone,
  HiMagnifyingGlassCircle,
  HiArchiveBox,
  HiClock,
} from "react-icons/hi2";

const features = [
  {
    name: "One purr-son. One answer.",
    description:
      "You know you're talking to the person who's going to be working on your project. I'm always available to answer questions and provide updates.",
    icon: HiPhone,
  },
  {
    name: "Give the box to Mr. Whiskers.",
    description:
      "Out-of-the-box solutions are great, but they're not always the best fit for your business. I'll work with you to find the right solution for your needs.",
    icon: HiArchiveBox,
  },
  {
    name: "Stale food? Nah.",
    description:
      "Tech is like cat food. It's great when it's fresh, but it can get stale fast. If you have legacy systems, I'll work with you to take the best parts and leave the rest behind.",
    icon: HiClock,
  },
  {
    name: "Feline-approved.",
    description:
      "Every project is inspected by the cat, since he believes he knows everything. If they don't like it, it's not going to make the cut.",
    icon: HiMagnifyingGlassCircle,
  },
] as const;

export default function PanelD() {
  return (
    <Panel>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center py-3 md:py-10 px-3 md:px-8">
        <div className="w-full lg:w-2/3 flex flex-col justify-stretch items-stretch">
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-medium font-raleway leading-7 uppercase text-brand-primary dark:text-brand-white">
                  Whiskers on kittens
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Working with me might be your new favorite thing.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600"></p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary-800 dark:bg-brand-white">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}
