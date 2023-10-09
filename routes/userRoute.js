const express = require("express");
const userRouter = express.Router();
const cors = require("cors");

userRouter.use(cors());

userRouter.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

const userController = require("../controller/userController.js");

userRouter.get("/user", userController.getAllUser);

userRouter.get("/user/:id", userController.getUserById);

userRouter.post("/register", userController.addUser);

userRouter.delete("/user/:id", userController.deleteUser);

userRouter.post("/login", userController.login);

userRouter.get("/logout", userController.logout);

module.exports = userRouter;