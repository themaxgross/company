import type { V2_MetaFunction } from "@remix-run/react";
import React from "react";

import Panel from "~/components/Panel";

import PanelA from "./panels/PanelA";
import PanelB from "./panels/PanelB";
import PanelC from "./panels/PanelC";

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

export default function Index() {
  return (
    <>
      <Panel className="pb-2 md:pb-8" />
      <PanelA />
      <PanelB />
      <PanelC />
      <Panel className="pb-2 md:pb-8" />
    </>
  );
}
