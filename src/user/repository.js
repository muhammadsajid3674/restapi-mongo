module.exports = class UserRepository {
  constructor(model) {
    this.model = model;
  }

  create(user) {
    return new Promise((resolve, reject) => {
      this.model(user).save();
      resolve(user);
    });
  }

  getByEmail(email) {
    return new Promise((resolve, reject) => {
      this.model.findOne({ email }).then((user) => resolve(user));
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.model.find({}).then((users) => resolve(users));
    });
  }

  update(id, object) {
    return new Promise((resolve, reject) => {
      this.model
        .findByIdAndUpdate(id, object, { new: true })
        .then((user) => resolve(user));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      this.model.findByIdAndDelete(id).then((user) => resolve(user));
    });
  }
};
