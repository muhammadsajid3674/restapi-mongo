const mongoose = require("mongoose");
const userSchema = require("./schema.js");
const bcrypt = require('bcryptjs');

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password);
};

const UserModal = mongoose.model("user", userSchema);

module.exports = UserModal;
