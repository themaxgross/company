import type { V2_MetaFunction } from "@remix-run/react";
import React from "react";

import Panel from "~/components/Panel";

import HeadlinePanel from "./panels/HeadlinePanel";
import IntroAboutPanel from "./panels/IntroAboutPanel";
import TroyPanel from "./panels/TroyPanel";
import FeaturesPanel from "./panels/FeaturesPanel";
import ContactPanel from "./panels/ContactPanel";

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

function SpacerPanel() {
  return <Panel className="pb-2 md:pb-8" />;
}

export default function Index() {
  return (
    <>
      <SpacerPanel />
      <HeadlinePanel />
      <IntroAboutPanel />
      <TroyPanel />
      <FeaturesPanel />
      <ContactPanel />
      <SpacerPanel />
    </>
  );
}
