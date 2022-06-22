// Importing the modules from Node Modules
const jwt = require("jsonwebtoken");
const User = require("./model");

// Creating a user in json format using HTTP requests
exports.createUser = async (req, res) => {
  try {
    // Using the request body to define the location of data* such as JSON variables / OOP
    // Defining the variables
    const userObj = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    // Creating the new user for the table / API
    const newUser = await User.create(userObj);
    // Creating the token, then printed using log
    const token = await jwt.sign({ id: newUser._id }, process.env.SECRET);
    console.log(token);
    // ... Also sending the token into the response body
    res.send({ newUser, token });
  } catch (error) {
    console.log(error);
    res.send({ error: error.code });
  }
};

// Being able to use the token
exports.tokenLogin = async (req, res) => {
  const token = await jwt.sign({ id: req.user._id }, process.env.SECRET);
  res.send({ user: req.user, token });
};
