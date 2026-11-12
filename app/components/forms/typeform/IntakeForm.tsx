import { lazy, Suspense } from "react";
import { ClientOnly } from "remix-utils/client-only";

const FORM_ID = "iQA1VPEB";
const Widget = lazy(() =>
  import("@typeform/embed-react").then(({ Widget }) => ({ default: Widget })),
);

export default function TypeformIntakeForm() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <ClientOnly fallback={<div className="h-[720px] w-full" />}>
        {() => (
          <Suspense fallback={<div className="h-[720px] w-full" />}>
            <Widget id={FORM_ID} className="h-full w-full" height={720} />
          </Suspense>
        )}
      </ClientOnly>
    </div>
  );
}
