const express = require("express");
const articleRouter = express.Router();
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

const articleController = require("../controller/artikelController.js");

articleRouter.get("/article", articleController.getAllArticle);

articleRouter.get("/article/:id", articleController.getArticleById);

articleRouter.post("/article", articleController.addArticle);

articleRouter.patch("/article/:id", articleController.updateArticle);

articleRouter.delete("/article/:id", articleController.deleteArticle);

module.exports = articleRouter;