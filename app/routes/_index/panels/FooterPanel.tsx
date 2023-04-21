import React from "react";
import Panel from "~/components/Panel";

export default function FooterPanel() {
  return (
    <Panel>
      <footer className="border-t border-brand-primary dark:border-brand-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            &copy; 2023 by Leo Ji LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </Panel>
  );
}
