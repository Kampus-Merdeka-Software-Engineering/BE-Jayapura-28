const db = require("../config/db_connect.js");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const User = db.define(
    "user", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            // unique: true,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

User.sync({ alter: true });
(async() => await db.sync())();

module.exports = User;