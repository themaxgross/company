import type { V2_MetaFunction } from "@remix-run/react";
import React from "react";
import PanelOne from "./panels/PanelOne";
import PanelTwo from "./panels/PanelTwo";
import PanelThree from "~/routes/_index/panels/PanelThree";
import Panel from "~/components/Panel";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Leo Ji LLC" },
    {
      name: "description",
      content:
        "Building blazing fast websites and beautiful designs for the web, one cat at a time.",
    },
  ];
};

const Divider = () => {
  return (
    <div className="relative mb-4 md:mb-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-brand-primary dark:border-brand-white border-4" />
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <>
      <Panel className="pb-2 md:pb-8" />
      <PanelOne />
      <PanelTwo />
      <PanelThree />
      <Panel className="pb-2 md:pb-8" />
    </>
  );
}
