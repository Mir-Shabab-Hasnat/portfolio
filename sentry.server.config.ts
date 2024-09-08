// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ab8d2ca4e0090deaf07fc8b1cff0e35f@o4507873288388608.ingest.us.sentry.io/4507915438522368",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
