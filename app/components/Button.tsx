import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";

const defaultClasses =
  "rounded-md bg-brand-primary-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

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
export function ButtonLink({
  children,
  className,
  ...props
}: { children: ReactNode } & React.ComponentPropsWithoutRef<"a">) {
  return (
    <a {...props} className={clsx(defaultClasses, className)}>
      Email me
    </a>
  );
}
