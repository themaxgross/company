import Panel from "~/components/Panel";

import { HiCheckCircle } from "react-icons/hi2";

import clsx from "clsx";
import { tiers } from "~/models/pricing/tiers";
import { MonthlyPricing } from "~/components/pricing/MonthlyPricing";
import { PricingContactButton } from "~/components/pricing/ContactButton";
import { Link } from "@remix-run/react";

export default function PricingPanel() {
  return (
    <Panel>
      <div className="max-w-2xl md:max-w-4xl xl:max-w-6xl mx-auto">
        <div
          className="isolate grid max-w-md grid-cols-1 gap-y-8
                     lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.name}
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
                    id={`id-${tier.name}`}
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
                <div className="flex items-baseline justify-end flex-col">
                  <MonthlyPricing priceMonthly={tier.priceMonthly} />
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
              </div>
              <PricingContactButton
                name={tier.name}
                href={tier.href}
                recommended={tier.recommendedOption}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 md:mt-8 mb-10 md:mb-32 text-center">
          <Link
            to="/pricing"
            className="
            text-sm
            font-medium underline hover:no-underline text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-200"
          >
            View detailed pricing
          </Link>
        </div>
      </div>
    </Panel>
  );
}
