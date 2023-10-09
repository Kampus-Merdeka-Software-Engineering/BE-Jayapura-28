const Article = require("../models/artikelModels.js");
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

async function getAllArticle() {
    const articles = await Article.findAll();
    return articles;
}

async function getArticleById(id) {
    const article = await Article.findOne({
        where: {
            artikel_id: id,
        },
    });

    return article;
}

async function addArticle(data) {
    const article = await Article.create(data);

    return article;
}

async function editArticle(id, data) {
    const article = await Article.update(data, {
        where: {
            artikel_id: id,
        },
    });

    return article;
}

async function deleteArticle(id) {
    const article = await Article.destroy({
        where: {
            artikel_id: id,
        },
    });

    return article;
}

module.exports = {
    getAllArticle,
    getArticleById,
    addArticle,
    editArticle,
    deleteArticle,
};