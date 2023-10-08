const db = require("../config/db_connect");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Article = db.define(
    "artikel", {
        artikel_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        judul_artikel: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        konten_artikel: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        sumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },

    {
        freezeTableName: true,
        timestamps: true,
    }
);

(async() => await db.sync())();

module.exports = Article;