import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Leo Ji LLC" },
    {
      name: "description",
      content: "Coming soon from a cat roommate near you.",
    },
  ];
};

const Index = () => {
  return (
    <div className="w-screen h-screen bg-brand-primary text-white p-4">
      <div className="w-full h-full flex items-center justify-center animate-fade-in">
        <div>
          <h1 className="text-4xl font-semibold mb-2">Meow!</h1>
          <h2 className="text-2xl mb-12">
            Coming soon from a cat roommate near you.
          </h2>
          <p className="text-lg font-extralight">– Leo Ji LLC</p>
        </div>
      </div>
    </div>
  );
};
export default Index;
