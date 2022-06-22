// Importing the modules from Node Modules
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../user/model");

// hashPassword generates a hash for the password.
exports.hashPassword = async (req, res, next) => {
  try {
    // Defining the (plain password, hash amount)
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
    // Catching an error
  } catch (error) {
    console.log(error);
    res.send({ error: error.code });
  }
};

// Comparing whether the two passwords match before running next function
exports.unHash = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    const result = await bcrypt.compare(req.body.password, req.user.password);
    if (result) {
      next();
    } else {
      // Logging incorrect credentials upon not meeting criteria
      throw new Error("Incorrect credentials");
    }
    // Catching an error
  } catch (error) {
    console.log(error);
    res.send({ error: error.code });
  }
};

// Checking if the token is valid and is recognised by the JWT
exports.tokenCheck = async (req, res, next) => {
  try {
    // token will be a header named "Authorization"
    const token = req.header("Authorization");
    // decodedToken will be checking if the token pairs with the .env SECRET
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(decodedToken.id);
    next();
      // Catching an error
  } catch (error) {
    console.log(error);
    res.send({ error: error.code });
  }
};
