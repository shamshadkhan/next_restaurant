const routes = require("next-routes");

module.exports = routes()
  .add({
    name: "index",
    pattern: "/",
    page: ""
  })
  .add({
    name: "cuisine",
    pattern: "/cuisine",
    page: "cuisine"
  });