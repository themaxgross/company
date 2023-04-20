import { Fade } from "react-awesome-reveal";
import type { V2_MetaFunction } from "@remix-run/react";
import logo from "~/images/logos/lj.svg";

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
      <div className="bg-gray-200 text-slate-800 flex flex-row font-raleway w-full">
        <div className="py-12 px-4 md:px-12 w-full xl:w-1/2 md:mr-auto min-h-24 flex flex-col justify-around">
          <div>
            <Fade cascade={true} triggerOnce={true} duration={2000}>
              <img src={logo} alt="" className="w-32 h-32 mb-12" />
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-6 md:mb-12 leading-tight">
                Websites so fast, they'll make you meow.
              </h1>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-6 md:mb-12 leading-tight">
                Designs so beautiful, they'll make you purr.
              </h1>
              <h2 className="text-xl md:text-2xl xl:text-3xl mb-6 md:mb-12">
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
