const express = require('express');
const { getCheck, postCheck } = require('../controller/check.controller');

const checkRouter = express.Router();

checkRouter.route("/").get(getCheck).post(postCheck);

module.exports = checkRouter;