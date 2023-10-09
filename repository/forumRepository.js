const Forum = require("../models/forumModels.js");
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

async function getAllForum() {
    const forums = await Forum.findAll();
    return forums;
}

async function getForumById(id) {
    const forum = await Forum.findOne({
        where: {
            forum_id: id,
        },
    });

    return forum;
}

async function addForum(data) {
    const forum = await Forum.create(data);

    return forum;
}

async function editForum(id, data) {
    const forum = await Forum.update(data, {
        where: {
            forum_id: id,
        },
    });

    return forum;
}

async function deleteForum(id) {
    const forum = await Forum.destroy({
        where: {
            forum_id: id,
        },
    });

    return forum;
}

module.exports = {
    getAllForum,
    getForumById,
    addForum,
    editForum,
    deleteForum,
};