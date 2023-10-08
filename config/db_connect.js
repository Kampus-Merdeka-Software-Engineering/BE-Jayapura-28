const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const db = new Sequelize(
    "mysql://avnadmin:AVNS_MG8QMzemeSX6T6Qydo2@mysql-34e0c795-capstone-28.aivencloud.com:11734/defaultdb?ssl-mode=REQUIRED", {
        ssl: fs.readFileSync(path.join(__dirname, "ca.pem")),
        dialect: "mysql",
        logging: true,
    }
);

module.exports = db;