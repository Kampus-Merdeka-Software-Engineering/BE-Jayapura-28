const conn = require('../config/db_connect')
const sequelize = require('sequelize')

const Saran = conn.define("saran", {
        saran_id: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nama: {
            type: sequelize.DataTypes.STRING,
            defaultValue: "anonym"
        },

        email: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },

        saran: {
            type: sequelize.DataTypes.TEXT,
            allowNull: false
        }
    },

    {
        freezeTableName: true,
        timestamps: false
    });

Saran.sync({ alter: true }).then(function(data) {
    //console.log('Table and model synced succcesfully')
}).catch(function(err) {
    console.log('Error syncing table and model!')
})

module.exports = Saran;