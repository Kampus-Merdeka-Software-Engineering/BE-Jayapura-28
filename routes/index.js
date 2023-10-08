const express = require("express");
const router = express.Router();

const saranRouter = require("./saranRoute.js");
const artikelRouter = require("./artikelRoute.js");
const userRouter = require("./userRoute.js");
const forumRouter = require("./forumRoute.js");
const bookingRouter = require("./bookingRoute.js");

router.use(saranRouter);
router.use(artikelRouter);
router.use(userRouter);
router.use(forumRouter);
router.use(bookingRouter);

module.exports = router;