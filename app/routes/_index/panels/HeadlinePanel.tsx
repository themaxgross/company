import { Fade } from "react-awesome-reveal";
import logo from "~/images/logos/lj.svg";
import React from "react";
import Panel from "~/components/Panel";
import type { V2_MetaFunction } from "@remix-run/react";

import socialShareDefaultImage from "~/images/logos/social-share-default.png";
export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Leo Ji, a paw-some boutique web developer and designer",
    },
    {
      name: "description",
      content:
        "Web developer and designer offering a paw-to-tail boutique service like no other.",
    },
    {
      property: "og:title",
      content: "Leo Ji, a paw-some boutique web developer and designer",
    },
    {
      property: "og:description",
      content:
        "Web developer and designer offering a paw-to-tail boutique service like no other.",
    },
    {
      property: "og:image",
      content: socialShareDefaultImage,
    },
  ];
};

export const HeadlinePanel = () => {
  return (
    <Panel className="flex flex-row justify-stretch items-stretch">
      <div className="w-full min-h-screen h-fit flex flex-row items-stretch justify-stretch">
        <div className="py-12 px-8 md:px-12 w-full xl:w-1/2 md:mr-auto min-h-24 flex flex-col justify-around">
          <div className="text-center sm:text-left">
            <Fade cascade={true} triggerOnce={true} duration={1500}>
              <h1 className="text-balance text-4xl md:text-5xl xl:text-6xl font-semibold mb-5 md:mb-10 leading-tight font-raleway">
                Websites that load faster than zoomies.
              </h1>
              <h1 className="text-balance text-4xl md:text-5xl xl:text-6xl font-semibold mb-5 md:mb-10 leading-tight font-raleway">
                Designs that are beyond purr-fect.
              </h1>
              <h2 className="text-balance text-2xl md:text-3xl xl:text-4xl font-light mb-5 md:mb-10 leading-tight font-raleway">
                Together with boutique business services, for a paw-to-tail
                service like no other.
              </h2>
              <div className="relative h-32">
                <img
                  src={logo}
                  alt=""
                  className="w-32 h-32 absolute border-2 border-brand-white left-0 right-0 top-0 mt-8 mx-auto md:left-auto md:right-auto"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Panel>
  );
};
export default HeadlinePanel;
