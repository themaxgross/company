import { createRequestHandler } from "@remix-run/cloudflare";
import * as build from "./build/server/index.js";

interface Env {
  ASSETS: Fetcher;
  [key: string]: unknown;
}

const handleRequest = createRequestHandler(build, process.env.NODE_ENV);

export default {
  fetch(request: Request, env: Env) {
    return handleRequest(request, env);
  },
} satisfies ExportedHandler<Env>;
