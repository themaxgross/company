import type { V2_MetaFunction } from "@remix-run/react";
import React from "react";
import PanelOne from "~/routes/_index/panels/PanelOne";

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
      <PanelOne />
    </>
  );
}
