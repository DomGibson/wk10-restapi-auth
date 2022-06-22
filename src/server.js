// Importing the modules from Node Modules
require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/routes");

// Setting the port or (||) the number 5001 if no port set in env
const port = process.env.PORT || 5001;

// Shortening Express.js
const app = express();

// Using Express.js, literally
app.use(express.json());
app.use(cors());
app.use(userRouter);

// Listening on the port set, logging the result
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
