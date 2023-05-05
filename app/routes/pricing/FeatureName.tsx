import { useState } from "react";
import clsx from "clsx";
import { Dialog } from "@headlessui/react";

export const FeatureDescriptionModal = ({
  name,
  description,
  open,
  setOpen,
}: {
  name: string;
  description: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="fixed inset-0 overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Panel className="relative z-10 w-screen h-screen flex flex-col justify-center items-center">
        <div className="p-4 bg-white text-gray-900 dark:bg-brand-primary-950 dark:text-brand-white">
          <Dialog.Title
            as="h3"
            className="text-xl md:text-2xl font-futura leading-6 text-gray-900 dark:text-brand-white mb-2"
          >
            {name}
          </Dialog.Title>
          <Dialog.Description
            as="p"
            className="text-sm md:text-md leading-6 text-gray-500 dark:text-gray-400 mb-4"
          >
            {description}
          </Dialog.Description>
          <button
            className="text-center text-sm font-medium leading-6 text-gray-900 dark:text-brand-white underline"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
