import type { LoaderFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

import { Fade } from "react-awesome-reveal";
import type { V2_MetaFunction } from "@remix-run/react";

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

export const Index = () => {
  return (
    <div className="bg-brand-primary p-8 min-w-screen min-h-screen flex justify-stretch items-stretch">
      <div className="p-5 bg-gray-200 text-slate-800 flex flex-row font-raleway m-0  w-full">
        <div className="px-5 md:px-12 w-1/2 mr-auto ml-0 min-h-24 flex flex-col justify-around">
          <div>
            <Fade cascade={true} triggerOnce={true} duration={2000}>
              <h1 className="text-6xl font-semibold mb-6 md:mb-12 leading-tight">
                Websites so fast,
                <br />
                they'll make you meow.
              </h1>
              <h1 className="text-6xl font-semibold mb-6 md:mb-12 leading-tight">
                Designs so beautiful,
                <br />
                they'll make you purr.
              </h1>
              <h2 className="text-3xl mb-12">
                Cats not included. Coming soon from a cat roommate near you.
              </h2>
              <p className="text-lg font-extralight">– Leo Ji LLC</p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
