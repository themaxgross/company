import type { V2_MetaFunction } from "@remix-run/react";

import { Header } from "~/components/pricing/layout/Header";
import { Footer } from "~/components/pricing/layout/Footer";

import type { TierType } from "~/models/pricing/tiers";
import { tiers } from "~/models/pricing/tiers";

import PricingTableSM from "./PricingTableSM";
import PricingTableXL from "./PricingTableXL";

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
    <div className="min-h-screen min-w-screen bg-brand-primary p-2 md:p-5">
      <div className="bg-gray-200 dark:bg-brand-primary-600">
        <Header />

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
              <PricingTable tiers={tiers} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
