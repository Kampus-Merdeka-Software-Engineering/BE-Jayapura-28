const saranRepo = require('../repository/saranRepository.js');

async function getAllSaran(req, res) {
    try {
        const sarans = await saranRepo.getAllSaran();
        res.status(200).json(sarans)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function getSaranById(req, res) {
    try {
        const { id } = req.params;
        const saran = await saranRepo.getSaranById(id)

        if (saran.length > 0) {
            res.status(200).json(saran)
        } else {
            res.status(404).json({ message: `Saran with id ${id} not found!` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function addSaran(req, res) {
    try {
        const { insertId } = await saranRepo.addSaran(req.body);

        res.status(201).json({ message: `Saran has created with id ${insertId}` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllSaran,
    getSaranById,
    addSaran
}