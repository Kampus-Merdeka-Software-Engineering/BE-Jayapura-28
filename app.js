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

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use("/", express.static(path.join(__dirname, "FE-Jayapura-28-main")));

// app.get("/", (req, res, next) => {
//     res.send("helloWorld");
// });

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