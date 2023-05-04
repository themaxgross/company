import clsx from "clsx";

export function PricingContactButton({
  href,
  name,
  recommended,
}: {
  href: string;
  name: string;
  recommended?: boolean;
}) {
  return (
    <a
      href={href}
      aria-describedby={`id-${name}`}
      className={clsx(
        recommended
          ? "bg-brand-primary dark:bg-brand-white text-brand-white dark:text-brand-primary shadow-sm hover:bg-brand-primary-700 dark:hover:bg-brand-primary-100"
          : "text-brand-primary-600 dark:text-brand-white dark:bg-brand-primary-200 hover:bg-brand-primary-50 dark:hover:bg-brand-primary-300",
        "ring-1 ring-inset ring-brand-primary-500 dark:ring-brand-primary-400",
        "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-600"
      )}
    >
      Get started
    </a>
  );
}
