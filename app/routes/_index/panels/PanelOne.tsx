import { Fade } from "react-awesome-reveal";
import logo from "~/images/logos/lj.svg";
import React from "react";

export const PanelOne = () => {
  return (
    <div className="bg-brand-primary dark:bg-neutral-200 p-8 min-w-screen min-h-screen flex justify-stretch items-stretch">
      <div className="bg-gray-200 text-slate-800 dark:bg-brand-primary dark:text-slate-100 flex flex-row w-full">
        <div className="py-12 px-4 md:px-12 w-full xl:w-1/2 md:mr-auto min-h-24 flex flex-col justify-around">
          <div>
            <Fade cascade={true} triggerOnce={true} duration={2000}>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-5 md:mb-10 leading-tight font-raleway">
                Websites so fast, they'll make you meow.
              </h1>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-5 md:mb-10 leading-tight font-raleway">
                Designs so beautiful, they'll make you purr.
              </h1>
              <h2 className="text-xl md:text-2xl xl:text-3xl mb-6 md:mb-12">
                Cats not included. Coming soon from a cat companion near you.
              </h2>
              <img
                src={logo}
                alt=""
                className="w-32 h-32 absolute  border-2 border-brand-white"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PanelOne;
