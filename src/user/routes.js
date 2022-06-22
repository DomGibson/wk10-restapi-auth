// Importing the modules from Node Modules 
const { Router } = require("express");
const userRouter = Router();
const { createUser, tokenLogin } = require("./controllers");
const { hashPassword, unHash, tokenCheck } = require("../middleware");

// Routing with the url / making requests
userRouter.post("/user", hashPassword, createUser);
userRouter.get("/user", tokenCheck, tokenLogin);
userRouter.post("/login", unHash, tokenLogin);

module.exports = userRouter;
