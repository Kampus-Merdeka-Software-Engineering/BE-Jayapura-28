const conn = require('../config/db_connect.js')
const sequelize = require('sequelize')

const Spesialis = conn.define("spesialis", {
        sp_id: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        jenis_sp: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        }
    },

    {
        freezeTableName: true,
        timestamps: false
    });

Spesialis.sync().then(function(data) {
    console.log('Table and model synced succcesfully')
}).catch(function(err) {
    console.log('Error syncing table and model!')
})

module.exports = Spesialis;