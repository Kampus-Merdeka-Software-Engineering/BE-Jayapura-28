const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express.Router();
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Private-Network", true);
    next();
});

function getTokenFromHeader(req) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        return authHeader.substring(7); // Mengambil token setelah "Bearer "
    }
    return null;
}

async function verifyToken(req, res, next) {
    const token = getTokenFromHeader(req);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = { verifyToken, getTokenFromHeader };