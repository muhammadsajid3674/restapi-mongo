const express = require('express');
const { authUser } = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.route('/').post(authUser);

module.exports = userRouter;