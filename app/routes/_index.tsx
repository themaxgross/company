import type { LoaderFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

export const loader: LoaderFunction = () => {
  if (process.env.NODE_ENV !== "development") {
    return redirect("/coming-soon");
  }

  return null;
};

export const Index = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen px-5 py-5 bg-brand-primary">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-semibold mb-2 text-white">
            Websites so fast, they'll make you meow.
          </h1>
          <h1 className="text-4xl font-semibold mb-2 text-white">
            Designs so beautiful, they'll make you purr.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Index;
