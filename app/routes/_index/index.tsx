import React from "react";

import HeadlinePanel from "./panels/HeadlinePanel";

/* HeadlinePanel handles meta as well, since it's the landing screen */
export { meta } from "./panels/HeadlinePanel";

export default function Index() {
  return (
    <HeadlinePanel />
  );
}
