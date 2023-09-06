const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const Routes = require("./src/routes");
const middleware = require("./config/middleware/error.middeware");
const { ENV } = require("./config/utils");
require("dotenv").config();

const app = express();
app.use(express.json()); // * parsing the incoming data
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));

if (ENV.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => res.send("<h1>Server is healthy! 💪<h1/>"));

app.use("/api/", Routes());

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
