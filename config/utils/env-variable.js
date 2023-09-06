require("dotenv").config();

const PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
let NODE_ENV = process.env.NODE_ENV;
// let GMAIL_USER = process.env.GMAIL_USER;
// let GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;
module.exports = {
  MONGODB_URI,
  PORT,
  NODE_ENV,
  //   GMAIL_USER,
  //   GMAIL_PASSWORD,
};
