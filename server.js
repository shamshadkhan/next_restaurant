const next = require("next");
const compression = require("compression");
const express = require("express");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const port = process.env.PORT || 3000;

// routing
const routes = require("./routes");
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(handler)
    .use(compression())
    .listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http:localhost:${port}`);
    });
});
