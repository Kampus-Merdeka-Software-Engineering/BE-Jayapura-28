const express = require("express");
const router = express.Router();

// const spesialisRouter = require('./spesialisRoute.js')
// const saranRouter = require('./saranRoute.js')
// const artikelRouter = require('./artikelRoute.js')
const doctorRouter = require("./doctorRoute.js");
const userRouter = require("./userRoute.js");

// router.use(spesialisRouter)
// router.use(saranRouter)
// router.use(artikelRouter)
router.use(doctorRouter);
router.use(userRouter);

module.exports = router;
