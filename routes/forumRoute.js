const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const forumRouter = express.Router();

const forumController = require("../controller/forumController.js");

forumRouter.get("/forum", forumController.getAllForum);

forumRouter.get("/forum/:id", forumController.getForumById);

forumRouter.post("/forum", forumController.addForum);

forumRouter.patch("/forum/:id", forumController.updateForum);

forumRouter.delete("/forum/:id", forumController.deleteForum);

module.exports = forumRouter;