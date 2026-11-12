import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./routes/_index";
import Layout from "./routes/_layout";
import Contact from "./routes/_layout.contact";
import Pricing from "./routes/_layout.pricing/route";
import "./tailwind.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const page = pathname === "/"
  ? <Index />
  : pathname === "/contact"
    ? <Layout><Contact /></Layout>
    : pathname === "/pricing"
      ? <Layout><Pricing /></Layout>
      : <Layout><h1>Page not found</h1></Layout>;

createRoot(document.getElementById("root")!).render(
  <StrictMode>{page}</StrictMode>,
);
