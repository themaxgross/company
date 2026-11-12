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
          ? "bg-brand-primary dark:bg-brand-gold-300 text-brand-white dark:text-brand-primary shadow-sm hover:bg-brand-primary-700 dark:hover:bg-brand-gold-200"
          : "text-brand-primary-600 dark:text-brand-white dark:bg-brand-gold-300 hover:bg-brand-primary-50 dark:hover:bg-brand-gold-400",
        "ring-1 ring-inset ring-brand-primary-500 dark:ring-brand-gold-400",
        "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold-300"
      )}
    >
      Get started
    </a>
  );
}
