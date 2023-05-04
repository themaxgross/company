import clsx from "clsx";

import { tiers } from "~/models/pricing/tiers";
import { Fragment } from "react";

import { HiCheckCircle, HiMinusCircle } from "react-icons/hi2";
import { sections } from "~/models/pricing/sections";
import { MonthlyPricing } from "~/components/pricing/MonthlyPricing";
import { PricingContactButton } from "~/components/pricing/ContactButton";

export default function PricingPage() {
  return (
    <div className="min-h-screen min-w-screen bg-brand-primary p-2 md:p-5">
      <div className="bg-gray-200 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-brand-primary py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base font-semibold leading-7 text-brand-primary dark:text-brand-white">
                  Pricing Purr-fection
                </h2>
                <p
                  className="mt-2 text-4xl font-semibold font-raleway tracking-tight text-gray-900 sm:text-5xl
                dark:text-brand-white"
                >
                  Simple, transparent pricing
                </p>
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-brand-white">
                Choose an affordable plan that's packed with the best features
                for engaging your audience, creating customer loyalty, and
                driving sales.
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-brand-white">
                Cat approval not included.
              </p>

              {/* xs to lg */}
              <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
                {tiers.map((tier) => (
                  <section
                    key={tier.id}
                    className={clsx(
                      tier.recommendedOption
                        ? "rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200 dark:ring-gray-700"
                        : "",
                      "p-8"
                    )}
                  >
                    <h3
                      id={tier.id}
                      className="text-sm font-semibold leading-6 text-gray-900 dark:text-brand-white"
                    >
                      {tier.name}
                    </h3>
                    <MonthlyPricing priceMonthly={tier.priceMonthly} />
                    <PricingContactButton
                      name={tier.name}
                      href={tier.href}
                      recommended={tier.recommendedOption}
                    />
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-900 dark:text-brand-white"
                    >
                      {sections.map((section) => (
                        <li key={section.name}>
                          <h4 className="font-medium text-lg leading-5 text-gray-900 dark:text-brand-white font-futura mt-8 mb-3 text-center">
                            {section.name}
                          </h4>
                          <ul role="list" className="space-y-4">
                            {section.features.map((feature) =>
                              feature.tiers[tier.id] ? (
                                <li key={feature.name} className="flex gap-x-3">
                                  <HiCheckCircle
                                    className="h-6 w-5 flex-none text-brand-primary dark:text-brand-white"
                                    aria-hidden="true"
                                  />
                                  <span>
                                    {feature.name}{" "}
                                    {typeof feature.tiers[tier.id] ===
                                    "string" ? (
                                      <span className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                                        ({feature.tiers[tier.id]})
                                      </span>
                                    ) : null}
                                  </span>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {/* lg+ */}
              <div className="isolate mt-20 hidden lg:block">
                <div className="relative -mx-8">
                  {tiers.some((tier) => tier.recommendedOption) ? (
                    <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                      <div
                        className="flex w-1/4 px-4"
                        aria-hidden="true"
                        style={{
                          marginLeft: `${
                            (tiers.findIndex((tier) => tier.recommendedOption) +
                              1) *
                            25
                          }%`,
                        }}
                      >
                        <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                      </div>
                    </div>
                  ) : null}
                  <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                    <caption className="sr-only">
                      Pricing plan comparison
                    </caption>
                    <colgroup>
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                      <col className="w-1/4" />
                    </colgroup>
                    <thead>
                      <tr>
                        <td />
                        {tiers.map((tier) => (
                          <th
                            key={tier.id}
                            scope="col"
                            className="px-6 pt-6 xl:px-8 xl:pt-8"
                          >
                            <div className="text-sm font-semibold leading-7 text-gray-900 dark:text-brand-white">
                              {tier.name}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="sr-only">Price</span>
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 pt-2 xl:px-8">
                            <MonthlyPricing priceMonthly={tier.priceMonthly} />
                            <PricingContactButton
                              name={tier.name}
                              href={tier.href}
                              recommended={tier.recommendedOption}
                            />
                          </td>
                        ))}
                      </tr>
                      {sections.map((section, sectionIdx) => (
                        <Fragment key={section.name}>
                          <tr>
                            <th
                              scope="colgroup"
                              colSpan={4}
                              className={clsx(
                                sectionIdx === 0 ? "pt-8" : "pt-16",
                                "pb-4 text-lg font-semibold font-futura leading-6 text-gray-900 dark:text-brand-primary-100"
                              )}
                            >
                              {section.name}
                              <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                            </th>
                          </tr>
                          {section.features.map((feature) => (
                            <tr key={feature.name}>
                              <th
                                scope="row"
                                className="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-brand-white"
                              >
                                {feature.name}
                                <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-brand-white/20" />
                              </th>
                              {tiers.map((tier) => (
                                <td key={tier.id} className="px-6 py-4 xl:px-8">
                                  {typeof feature.tiers[tier.id] ===
                                  "string" ? (
                                    <div className="text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
                                      {feature.tiers[tier.id]}
                                    </div>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.id] === true ? (
                                        <HiCheckCircle
                                          className="mx-auto h-5 w-5 text-brand-primary dark:text-brand-primary-50"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <HiMinusCircle
                                          className="mx-auto h-5 w-5 text-gray-400 dark:text-brand-primary-600"
                                          aria-hidden="true"
                                        />
                                      )}

                                      <span className="sr-only">
                                        {feature.tiers[tier.id] === true
                                          ? "Included"
                                          : "Not included"}{" "}
                                        in {tier.name}
                                      </span>
                                    </>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
