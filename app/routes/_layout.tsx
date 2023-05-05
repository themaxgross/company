import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";

export default function Layout() {
  return (
    <div className="min-h-screen min-w-screen bg-brand-primary p-2 md:p-5">
      <div className="bg-gray-200 dark:bg-brand-primary-600">
        <Header />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
