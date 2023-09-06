const AddUser = require("./services/add_user");

module.exports = (repository) => {
  const addUser = (req, res) => {
    const { name, email, password } = req.body;

    AddUser(repository)
      .execute(name, email, password)
      .then((result) => res.sendStatus(200))
      .catch((err) => {
        res.sendStatus(403);
        console.log(err);
      });
  };
  return { addUser };
};
