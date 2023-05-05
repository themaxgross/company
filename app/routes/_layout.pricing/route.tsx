import type { V2_MetaFunction } from "@remix-run/react";

import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

import type { TierType } from "~/models/pricing/tiers";
import { tiers } from "~/models/pricing/tiers";

import PricingTableSM from "./PricingTableSM";
import PricingTableXL from "./PricingTableXL";
import { Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Pricing | Leo Ji LLC",
    },
    {
      name: "description",
      content:
        "Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
    },
  ];
};

const PricingTable = ({ tiers }: { tiers: TierType[] }) => {
  return (
    <>
      {/* xs to lg */}
      <PricingTableSM tiers={tiers} />
      {/* lg+ */}
      <PricingTableXL tiers={tiers} />
    </>
  );
};

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-brand-primary-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-normal leading-7 text-brand-primary dark:text-brand-white font-futura uppercase">
            Pricing purr-fection
          </h2>
          <p
            className="mt-2 text-4xl font-semibold font-raleway tracking-tight text-gray-900 sm:text-5xl
                             dark:text-brand-white"
          >
            Simple, tail-ored pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-7 text-gray-600 dark:text-brand-white">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-center text-lg leading-7 text-gray-600 dark:text-brand-white">
          Cat approval not included.
        </p>
        <PricingTable tiers={tiers} />
      </div>
    </div>
  );
}
