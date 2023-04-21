import type { ReactNode } from "react";
import clsx from "clsx";

export default function Panel({
  className,
  children,
  inverted = false,
}: {
  className?: string;
  children?: ReactNode;
  inverted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "bg-brand-primary dark:bg-gray-300",
        "px-2 md:px-8",
        className
      )}
    >
      <div
        className={clsx(
          inverted
            ? "bg-brand-primary dark:bg-brand-white text-slate-100 dark:text-slate-800"
            : "bg-brand-white text-slate-800 dark:bg-brand-primary dark:text-slate-100",
          "flex flex-col justify-stretch items-stretch",
          "w-full"
        )}
      >
        <div className=" mx-auto max-w-10xl w-full">{children}</div>
      </div>
    </div>
  );
}
