import cat from "~/images/_TLJ3167.jpg";
import React from "react";
import Panel from "~/components/Panel";
import { Link, useLocation, useSearchParams } from "@remix-run/react";
import Button from "~/components/Button";
import { useSearchDebugParam } from "~/hooks/useSearchDebugParam";

export default function PanelC() {
  const debugMode = useSearchDebugParam();

  return (
    <Panel inverted={true}>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center py-3 md:py-10 px-3 md:px-8">
        <div className="w-full lg:w-2/3 flex flex-col justify-stretch items-stretch">
          <img
            src={cat}
            alt="Troy the cat"
            className="w-full h-auto border-8 dark:border-brand-primary border-brand-white rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center py-5 px-8 md:px-12 dark:text-brand-primary text-brand-white">
          <h3 className="text-xl md:text-3xl font-semibold tracking-loose mb-3 md:mb-5 font-raleway">
            Meet Troy, the cat
          </h3>
          <p className="text-md md:text-xl mb-2 md:mb-4">
            Troy is a 8-year-old domestic short-hair cat. He enjoys sleeping,
            eating, and curling up on legs.
          </p>
          <p className="text-md md:text-xl mb-2 md:mb-4">
            I adopted him from the Humane Rescue Alliance in Washington, DC in
            2020 during the COVID-19 pandemic.
          </p>
          {debugMode ? (
            <Link to="/troy" className="mt-2 md:mt-3">
              <Button className="flex flex-row justify-center items-center">
                <span className="mr-2">🐈</span> Learn more about Troy
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </Panel>
  );
}
