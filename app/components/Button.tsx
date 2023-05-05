import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";

const defaultClasses =
  "rounded-md bg-brand-primary-800 hover:bg-brand-primary-300 " +
  "px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

export default function Button({
  children,
  className,
  ...props
}: { children: ReactNode } & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button {...props} className={clsx(defaultClasses, className)}>
      {children}
    </button>
  );
}
