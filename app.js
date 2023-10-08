const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const router = require("./routes/index.js");
const db = require("./config/db_connect.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
    "https://kampus-merdeka-software-engineering.github.io/FE-Jayapura-28/",
];
const corsOptions = {
    origin: function(origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(express.json());
app.use(router);
app.use(cors(corsOptions));
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.get("/", (req, res, next) => {
    res.redirect(
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