import type { TierType } from "~/models/pricing/tiers";
import clsx from "clsx";
import { MonthlyPricing } from "~/components/pricing/MonthlyPricing";
import { PricingContactButton } from "~/components/pricing/ContactButton";
import { sections } from "~/models/pricing/sections";
import { HiCheckCircle } from "react-icons/hi2";

function TierSection({ tier }: { tier: TierType }) {
  return (
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
                      {typeof feature.tiers[tier.id] === "string" ? (
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
  );
}

export default function PricingTableSM({ tiers }: { tiers: TierType[] }) {
  return (
    <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
      {tiers.map((tier) => (
        <TierSection tier={tier} />
      ))}
    </div>
  );
}
