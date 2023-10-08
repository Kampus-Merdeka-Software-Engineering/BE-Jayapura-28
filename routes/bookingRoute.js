const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const bookingRouter = express.Router();

bookingRouter.get("/booking", verifyToken, (req, res) => {
    res.status(200).json({ message: "Silahkan lakukan booking!" });
});

module.exports = bookingRouter;