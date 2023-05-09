export function MonthlyPricing({ priceMonthly }: { priceMonthly?: string }) {
  return (
    <p className="mt-6 flex items-baseline gap-x-1">
      {priceMonthly ? (
        <>
          <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-brand-white">
            Starting at{" "}
          </span>
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-brand-white">
            {priceMonthly}
          </span>
          <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-brand-white">
            /month
          </span>
        </>
      ) : (
        <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-slate-200">
          Contact for pricing
        </span>
      )}
    </p>
  );
}
