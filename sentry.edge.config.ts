// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ab8d2ca4e0090deaf07fc8b1cff0e35f@o4507873288388608.ingest.us.sentry.io/4507915438522368",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
