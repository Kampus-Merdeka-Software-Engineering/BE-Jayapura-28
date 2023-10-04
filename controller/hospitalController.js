const hospitalRepo = require('../repository/hospitalRepository.js');

async function getAllHospital(req, res) {
    try {
        const hospitals = await hospitalRepo.getAllHospital();
        res.status(200).json(hospitals)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function getHospitalById(req, res) {
    try {
        const { id } = req.params;
        const hospital = await hospitalRepo.getHospitalById(id)

        if (hospital.length > 0) {
            res.status(200).json(hospital)
        } else {
            res.status(404).json({ message: `Hospital with id ${id} not found!` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function addHospital(req, res) {
    try {
        const { insertId } = await hospitalRepo.addHospital(req.body);

        res.status(201).json({ message: `Hospital has created with id ${insertId}` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function deleteHospitalById(req, res) {
    try {
        const { deleteId } = req.params;

        res.status(201).json({ message: `Hospital with id ${deleteId} have been deleted ` })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllHospital,
    getHospitalById,
    addHospital,
    deleteHospitalById
}