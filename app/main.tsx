import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./routes/_index";
import Layout from "./routes/_layout";
import Contact from "./routes/_layout.contact";
import "./tailwind.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const page = pathname === "/"
  ? <Index />
  : pathname === "/contact"
    ? <Layout><Contact /></Layout>
    : <Layout><h1>Page not found</h1></Layout>;

createRoot(document.getElementById("root")!).render(
  <StrictMode>{page}</StrictMode>,
);
