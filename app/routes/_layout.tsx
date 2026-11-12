import type { ReactNode } from "react";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen min-w-screen bg-brand-primary p-2 md:p-5">
      <div className="bg-brand-primary-600 text-brand-white">
        <Header />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
