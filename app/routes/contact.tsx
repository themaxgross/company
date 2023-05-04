import type { LoaderFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

export const loader: LoaderFunction = async () => {
  return redirect("/#contact");
};

export default function Contact() {
  return null;
}
