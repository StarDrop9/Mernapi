const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 10 },
  displayName: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);
