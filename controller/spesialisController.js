const spesialisRepo = require('../repository/spesialisRepository.js');

async function getAllSpesialis(req, res) {
    try {
        const spesialist = await spesialisRepo.getAllSpesialis();
        res.status(200).json(spesialist)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function getSpesialisById(req, res) {
    try {
        const { id } = req.params;
        const spesialis = await spesialisRepo.getSpesialisById(id)

        if (spesialis.length > 0) {
            res.status(200).json(spesialis)
        } else {
            res.status(404).json({ message: `Spesialist with id ${id} not found!` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function addSpesialis(req, res) {
    try {
        const { insertId } = await spesialisRepo.addSpesialis(req.body);

        res.status(201).json({ message: `Spesialis has created with id ${insertId}` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllSpesialis,
    getSpesialisById,
    addSpesialis
}