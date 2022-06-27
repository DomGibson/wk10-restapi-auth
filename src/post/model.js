// Importing the modules from Node Modules
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

// Simplifying It more
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
