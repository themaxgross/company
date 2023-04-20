import type { V2_MetaFunction } from "@remix-run/react";
import React from "react";
import PanelOne from "./panels/PanelOne";
import PanelTwo from "./panels/PanelTwo";

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
        <div className="w-full border-t border-brand-primary border-4" />
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div className="bg-brand-primary dark:bg-neutral-200 p-8 min-w-screen min-h-screen flex flex-row justify-stretch items-stretch">
      <div className="bg-gray-200 text-slate-800 dark:bg-brand-primary dark:text-slate-100 flex flex-col justify-stretch items-stretch w-full">
        <PanelOne />
        <Divider />
        <PanelTwo />
      </div>
    </div>
  );
}
