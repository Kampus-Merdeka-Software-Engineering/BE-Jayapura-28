const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const router = require("./routes/index.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);
app.use(cors());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use("/", express.static(path.join(__dirname, "FE-Jayapura-28")));

app.listen(port, function() {
    console.log("server running on", port);
});