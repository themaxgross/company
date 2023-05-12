import { Widget } from "@typeform/embed-react";
import { ClientOnly } from "remix-utils";

const FORM_ID = "iQA1VPEB";

export default function TypeformIntakeForm() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <ClientOnly>
        {() => <Widget id={FORM_ID} className="w-full h-full" height={720} />}
      </ClientOnly>
    </div>
  );
}
