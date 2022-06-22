// Importing the modules from Node Modules
const mongoose = require("mongoose");

// The schema defining the variables and the data structure for the database / API
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Simplifying It more
const User = mongoose.model("User", userSchema);

module.exports = User;
