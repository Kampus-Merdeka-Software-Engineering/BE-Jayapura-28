const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const bookingRouter = express.Router();
const cors = require("cors");

bookingRouter.use(cors());

bookingRouter.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

bookingRouter.get("/booking", verifyToken, (req, res) => {
    res.status(200).json({ message: "Silahkan lakukan booking!" });
});

module.exports = bookingRouter;