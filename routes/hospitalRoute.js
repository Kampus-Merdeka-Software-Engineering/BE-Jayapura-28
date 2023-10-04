const express = require('express')
const hospitalRouter = express.Router();

const hospitalController = require('../controller/hospitalController.js')

hospitalRouter.get('/hospital', hospitalController.getAllHospital);

hospitalRouter.get('/hospital/:id', hospitalController.getHospitalById);

hospitalRouter.post('/hospital', hospitalController.addHospital);

hospitalRouter.delete('/hospital/:deleteId', hospitalController.deleteHospitalById);

module.exports = hospitalRouter;