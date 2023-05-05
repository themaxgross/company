import type { TierType } from "~/models/pricing/tiers";

import { MonthlyPricing } from "~/components/pricing/MonthlyPricing";
import { PricingContactButton } from "~/components/pricing/ContactButton";
import { sections } from "~/models/pricing/sections";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { HiCheckCircle, HiMinusCircle } from "react-icons/hi2";
import { FeatureDescriptionModal } from "~/routes/pricing/FeatureName";

const FeatureName = ({
  name,
  description,
}: {
  name: string;
  description?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <th
      scope="row"
      className={clsx(
        "py-4 text-sm font-normal leading-6 text-gray-900 dark:text-brand-white",
        description
          ? "cursor-pointer underline underline-offset-2 decoration-dotted"
          : ""
      )}
      onClick={description ? () => setOpen((isOpen) => !isOpen) : undefined}
    >
      {name}
      <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-brand-white/20" />

      {description ? (
        <FeatureDescriptionModal
          name={name}
          description={description}
          open={open}
          setOpen={setOpen}
        />
      ) : null}
    </th>
  );
};

export default function PricingTableXL({ tiers }: { tiers: TierType[] }) {
  return (
    <div className="isolate mt-20 hidden lg:block">
      <div className="relative -mx-8">
        {tiers.some((tier) => tier.recommendedOption) ? (
          <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
            <div
              className="flex w-1/4 px-4"
              aria-hidden="true"
              style={{
                marginLeft: `${
                  (tiers.findIndex((tier) => tier.recommendedOption) + 1) * 25
                }%`,
              }}
            >
              <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
            </div>
          </div>
        ) : null}
        <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
          <caption className="sr-only">Pricing plan comparison</caption>
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
                    <FeatureName
                      name={feature.name}
                      description={feature.description}
                    />

                    {tiers.map((tier) => (
                      <td key={tier.id} className="px-6 py-4 xl:px-8">
                        {typeof feature.tiers[tier.id] === "string" ? (
                          <div className="text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
                            {feature.tiers[tier.id]}
                          </div>
                        ) : (
                          <>
                            {feature.tiers[tier.id] === true ? (
                              <HiCheckCircle
                                className="mx-auto h-6 w-6 text-brand-primary dark:text-brand-primary-50"
                                aria-hidden="true"
                              />
                            ) : (
                              <HiMinusCircle
                                className="mx-auto h-6 w-6 text-gray-400 dark:text-brand-primary-300"
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
  );
}
