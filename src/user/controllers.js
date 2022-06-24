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

// Deletion of a user within the database, 
// wont delete other regis if making DELETE request over and over again
exports.deleteUser = async (req, res) => {
  // Logging { username: 'user' } as it is what it is targeting
  console.log(`Params: ${req.params}`);
  console.log(`Body: ${req.body}`);
    try {
        const userObj = {
            username: req.body.username,
        };
        const userDel = await User.deleteOne(userObj);
        console.log("Deleting User");
        res.send(userDel);
        if (userDel.deletedCount == 0) {
        console.log("User Has Not Been Deleted", userDel);
        } else if ((userDel.deletedCount != 0)) {
          console.log("User Has Been Deleted", userDel);
        };
    } catch (error) {
        console.log(error);
    }
};

exports.updateUser = async (req, res) => {
  try {
      const userObj = {
          username: req.body.username,
          newusername: req.body.newusername
      };
      console.log("update single user", userObj);
      let response = await User.findOneAndUpdate({
          username: userObj.username
      }, {
          $set: {
              username: userObj.newusername,
          }
      }, {
          new: true
      });
      response = await User.findOne({username: userObj.newusername});
      res.status(200).json({data:response});
  } catch (error) {
      console.log(error)
      res.send(error);
  }
};