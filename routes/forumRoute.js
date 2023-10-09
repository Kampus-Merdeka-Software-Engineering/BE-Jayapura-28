const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const forumRouter = express.Router();
const cors = require("cors");

forumRouter.use(cors());

forumRouter.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

const forumController = require("../controller/forumController.js");

forumRouter.get("/forum", forumController.getAllForum);

forumRouter.get("/forum/:id", forumController.getForumById);

forumRouter.post("/forum", forumController.addForum);

forumRouter.patch("/forum/:id", forumController.updateForum);

forumRouter.delete("/forum/:id", forumController.deleteForum);

module.exports = forumRouter;