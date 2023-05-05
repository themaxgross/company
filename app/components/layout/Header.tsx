import { Link } from "@remix-run/react";
import logo from "~/images/logos/lj.svg";

export const Header = () => {
  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative py-5">
          <Link to="/" className="inline-flex items-center">
            <span className="sr-only">Leo Ji LLC</span>
            <img
              src={logo}
              className="w-auto h-10 sm:h-13 md:h-16 lg:h-20"
              alt="Leo Ji LLC"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
