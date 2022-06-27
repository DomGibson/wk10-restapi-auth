// Importing the modules from Node Modules
const Post = require("./model");

// ################################################################################### POSTS ###

// POSTS
exports.viewPost = async (req, res) => {
  try {
    const postObj = {
      username: req.body.username,
      image: req.body.image,
    };
    const viewPost = await Post.findOne(postObj);
    res.send({ viewPost });
  } catch (error) {
    console.log(error);
  }
};

exports.createPost = async (req, res) => {
  try {
    // Using the request body to define the location of data* such as JSON variables / OOP
    // Defining the variables
    const postObj = {
      username: req.body.username,
      image: req.body.image,
    };
    // Creating the new Post for the table / API
    const newPost = await Post.create(postObj);
    // Creating the token, then printed using log
    
    // N/A

    // ... Also sending the token into the response body
    res.send({ newPost });
  } catch (error) {
    console.log(error);
    res.send({ error: error.code });
  }
};

exports.deletePost = async (req, res) => {
  // Logging { username: 'user' } as it is what it is targeting
  console.log(`Params: ${req.params}`);
  console.log(`Body: ${req.body}`);
    try {
        const postObj = {
            username: req.body.username,
        };
        const postDel = await Post.deleteOne(postObj);
        console.log("Deleting User");
        res.send(userDel);
        if (userDel.deletedCount == 0) {
        console.log("Post Has Not Been Deleted", postDel);
        } else if ((postDel.deletedCount != 0)) {
          console.log("Post Has Been Deleted", postDel);
        };
    } catch (error) {
        console.log(error);
    }
};