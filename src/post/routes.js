// Importing the modules from Node Modules 
const { Router } = require("express");
const postRouter = Router();
const { createPost, deletePost, viewPost } = require("./controllers");

// Routing with the url / making requests
postRouter.get("/post", viewPost );
postRouter.post("/post", createPost);
postRouter.delete("/:username", deletePost);

module.exports = postRouter;