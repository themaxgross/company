import logo from "~/images/logos/lj.svg";
import React from "react";
import Panel from "~/components/Panel";
export const HeadlinePanel = () => {
  return (
    <Panel className="flex flex-row justify-stretch items-stretch">
      <div className="w-full min-h-screen h-fit flex flex-row items-stretch justify-stretch">
        <div className="py-12 px-8 md:px-12 w-full xl:w-1/2 md:mr-auto min-h-24 flex flex-col justify-around">
          <div className="text-center sm:text-left">
            <div className="animate-fade-in">
              <h1 className="text-balance text-4xl md:text-5xl xl:text-6xl font-semibold mb-5 md:mb-10 leading-tight font-raleway">
                Improvements coming soon
              </h1>
              <div className="relative h-32">
                <img
                  src={logo}
                  alt=""
                  className="w-32 h-32 absolute border-2 border-brand-white left-0 right-0 top-0 mt-8 mx-auto md:left-auto md:right-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
};
export default HeadlinePanel;
