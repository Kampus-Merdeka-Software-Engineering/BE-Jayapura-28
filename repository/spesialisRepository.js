const connection = require("../config/db_connect.js")

const table = "spesialis"

function getAllSpesialis() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

function getSpesialisById(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id_spesialis = ${id}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

function addSpesialis({ jenisSpesialis }) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} (jenisSpesialis) VALUES ('${jenisSpesialis}')`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}


module.exports = {
    getAllSpesialis,
    getSpesialisById,
    addSpesialis
}