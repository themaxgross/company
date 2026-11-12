import React from "react";

import Panel from "~/components/Panel";

import HeadlinePanel from "./panels/HeadlinePanel";

/* HeadlinePanel handles meta as well, since it's the landing screen */
export { meta } from "./panels/HeadlinePanel";

export default function Index() {
  return (
    <>
      <HeadlinePanel />
      <Panel>
        <div className="flex min-h-64 items-center justify-center px-8 py-16 text-center">
          <h2 className="text-2xl font-light md:text-3xl">
            Improvements coming soon
          </h2>
        </div>
      </Panel>
    </>
  );
}
