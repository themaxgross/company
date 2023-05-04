import Panel from "~/components/Panel";

import { HiCheckCircle } from "react-icons/hi2";

import clsx from "clsx";
import { useSearchDebugParam } from "~/hooks/useSearchDebugParam";

interface Tier {
  name: string;
  id: string;
  href: string;
  priceMonthly?: string;
  description: string;
  features: string[];
  recommendedOption?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Economy Basic",
    id: "economy-basic",
    href: "#",
    priceMonthly: "$69",
    description: "The basics to get your business up and running on the web.",
    features: [
      "WordPress site with custom domain, SSL, and CDN",
      "Custom plugins and themes supported",
      "Target audience and content consultation",
    ],
    recommendedOption: false,
  },
  {
    name: "Economy Plus",
    id: "economy-plus",
    href: "#",
    priceMonthly: "$99",
    description: "High-touch services for a professional web presence.",
    features: [
      "Everything in Economy Basic",
      "Photo services (1 session)",
      "Content copywriting for static pages",
    ],
    recommendedOption: true,
  },
  {
    name: "Business Pro",
    id: "business-pro",
    href: "#",
    description: "Dedicated support for the most demanding use cases.",
    features: [
      "SLA uptime guarantee",
      "Custom development",
      "Unlimited photo and content services",
    ],
    recommendedOption: false,
  },
];

export default function PricingPanel() {
  const debug = useSearchDebugParam();

  // if (!debug) return null;

  return (
    <Panel>
      <div className="max-w-2xl md:max-w-4xl xl:max-w-6xl mx-auto">
        <div
          className="isolate mb-32 grid max-w-md grid-cols-1 gap-y-8
                     lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={clsx(
                tier.recommendedOption
                  ? "lg:z-10 lg:rounded-b-none"
                  : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl",
                "bg-white dark:bg-slate-900",
                "ring-1 ring-gray-200",
                "p-8 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={`id-${tier.id}`}
                    className={clsx(
                      tier.recommendedOption
                        ? "text-brand-primary-600 dark:text-brand-white"
                        : "text-gray-900 dark:text-gray-300",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.recommendedOption ? (
                    <p
                      className="rounded-full
                      bg-brand-primary-600/10
                      dark:bg-brand-primary-400/60
                      px-2.5 py-1 text-xs font-semibold
                      leading-5 text-brand-primary-600 dark:text-brand-primary-100"
                    >
                      Recommended
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-200">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  {tier.priceMonthly ? (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-brand-white">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-brand-white">
                        /month
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-slate-200">
                      Contact for pricing
                    </span>
                  )}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-slate-200"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <HiCheckCircle
                        className="h-6 w-5 flex-none text-brand-primary dark:text-brand-primary-200"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={clsx(
                  tier.recommendedOption
                    ? "bg-brand-primary dark:bg-brand-white text-brand-white dark:text-brand-primary shadow-sm hover:bg-brand-primary-700 dark:hover:bg-brand-primary-100"
                    : "text-brand-primary-600 dark:text-brand-white dark:bg-brand-primary-200 hover:bg-brand-primary-50 dark:hover:bg-brand-primary-300",
                  "ring-1 ring-inset ring-brand-primary-500 dark:ring-brand-primary-400",
                  "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-600"
                )}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
