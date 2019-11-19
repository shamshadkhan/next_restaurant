const routes = require("next-routes");

module.exports = routes()
  .add({
    name: "index",
    pattern: "/index",
    page: "index"
  })
  .add({
    name: "cuisine",
    pattern: "/cuisine",
    page: "cuisine"
  });
