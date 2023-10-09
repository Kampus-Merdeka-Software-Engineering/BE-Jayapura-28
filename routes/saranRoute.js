const express = require("express");
const saranRouter = express.Router();
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

const saranController = require("../controller/saranController.js");

saranRouter.get("/saran", saranController.getAllSaran);

saranRouter.get("/saran/:id", saranController.getSaranById);

saranRouter.post("/submit", saranController.addSaran);

saranRouter.patch("/saran/:id", saranController.updateSaran);

saranRouter.delete("/saran/:id", saranController.deleteSaran);

module.exports = saranRouter;