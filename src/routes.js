const express = require("express");
const userRoutes = require("./user/route");

const Routes = (dependencies) => {
  const router = express.Router();
  router.use("/users", userRoutes(dependencies));
  return router;
};

module.exports = Routes;
