const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const router = require("./routes/index.js");
const db = require("./config/db_connect.js");

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
app.get("/", (req, res) => {
    res.send(
        "https://kampus-merdeka-software-engineering.github.io/FE-Jayapura-28/"
    );
});

app.listen(port, function() {
    db.authenticate()
        .then(function() {
            console.log("Database terhubung....");
        })
        .catch(function(err) {
            console.log("Database gagal terhubung karena:", err);
        });
    console.log("server running on", port);
});