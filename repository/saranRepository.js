const Saran = require("../models/saranModels.js");
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

async function getAllSaran() {
    const sarans = await Saran.findAll();
    return sarans;
}

async function getSaranById(id) {
    const saran = await Saran.findOne({
        where: {
            saran_id: id,
        },
    });

    return saran;
}

async function addSaran(data) {
    const saran = await Saran.create(data);

    return saran;
}

async function editSaran(id, data) {
    const saran = await Saran.update(data, {
        where: {
            saran_id: id,
        },
    });

    return saran;
}

async function deleteSaran(id) {
    const saran = await Saran.destroy({
        where: {
            saran_id: id,
        },
    });

    return saran;
}

module.exports = {
    getAllSaran,
    getSaranById,
    addSaran,
    editSaran,
    deleteSaran,
};