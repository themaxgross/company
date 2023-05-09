export function MonthlyPricing({ priceMonthly }: { priceMonthly?: string }) {
  return (
    <p className="mt-6 flex items-baseline gap-x-1">
      {priceMonthly ? (
        <div className="flex flex-col gap-y-1">
          <div>
            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-brand-white">
              Est.{" "}
            </span>
            <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-brand-white">
              {priceMonthly}
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-brand-white">
              /mo.
            </span>
          </div>
          <div>
            <span className="text-xs font-futura font-lighter leading-3 text-gray-600 dark:text-slate-200">
              Actual price varies based on features and contract negotiation.
            </span>
          </div>
        </div>
      ) : (
        <span className="leading-6 text-gray-600 dark:text-slate-200 text-xl small-caps font-medium font-futura">
          Contact for pricing
        </span>
      )}
    </p>
  );
}
