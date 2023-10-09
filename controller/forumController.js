const forumRepo = require("../repository/forumRepository.js");
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

async function getAllForum(req, res) {
    try {
        const forums = await forumRepo.getAllForum();
        res.status(200).json(forums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getForumById(req, res) {
    try {
        const { id } = req.params;
        const forum = await forumRepo.getForumById(id);

        if (!doctor) {
            res.status(404).json({ message: `Message with id ${id} not found!` });
        } else {
            res.status(200).json(doctor);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function addForum(req, res) {
    try {
        // const {name}
        const { dataValues } = await forumRepo.addForum(req.body);

        res.status(201).json(dataValues);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateForum(req, res) {
    try {
        const { id } = req.params;
        const [isSuccess] = await forumRepo.editForum(id, req.body);

        if (isSuccess) {
            res
                .status(200)
                .json({ message: `Message with id ${id} has successfully updated` });
        } else {
            res
                .status(400)
                .json({ message: `Message with id ${id} has failed updated` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteForum(req, res) {
    try {
        const { id } = req.params;
        const isSuccess = await forumRepo.deleteForum(id);

        if (isSuccess) {
            res
                .status(200)
                .json({ message: `Message with id ${id} has successfully deleted` });
        } else {
            res
                .status(400)
                .json({ message: `Message with id ${id} has failed deleted` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllForum,
    getForumById,
    addForum,
    updateForum,
    deleteForum,
};