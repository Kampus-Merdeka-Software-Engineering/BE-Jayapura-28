const connection = require("../config/db_connect.js")

const table = "saran"

function getAllSaran() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

function getSaranById(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id_saran = ${id}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

function addSaran({ nama, email, saran }) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} (nama,email,saran) VALUES ('${nama}', '${email}', '${saran}')`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}


module.exports = {
    getAllSaran,
    getSaranById,
    addSaran
}