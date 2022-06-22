// Importing the modules from Node Modules
require("dotenv").config();
const mongoose = require("mongoose");

// Connection Snippet. Using URI set from .env & logging if the connection is successful
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected");
    // Catching an error if unsuccessful
  } catch (error) {
    console.log(error);
  }
};

// Running the function
connection();
