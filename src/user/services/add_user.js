module.exports = (repository) => {
  async function execute(name, email, password) {
    return Promise.all([repository.getByEmail(email)]).then((user) => {
      if (user[0]) {
        return Promise.reject("Username already taken!");
      } else {
        repository.create({ name, email, password });
        return Promise.resolve("all good!");
      }
    });
  }
  return { execute };
};
