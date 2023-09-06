const express = require("express");
const UserRepository = require("./repository");
const UserController = require("./controller");
const UserModal = require("./data_access/modal");

const userRoutes = () => {
  const modal = UserModal;
  const repository = new UserRepository(modal);
  const router = express.Router();
  const controller = UserController(repository);

  router.route("/").post(controller.addUser);
  return router;
};

module.exports = userRoutes;
