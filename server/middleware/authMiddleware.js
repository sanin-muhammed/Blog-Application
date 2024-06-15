const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "userJWT";

exports.auth = async (req, res, ) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log({ token });
    if (!token || token === "null") {
        res.status(400).json({ error: true, status: false, message: "Please Login or Register" });
        return;
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(400).json({ error: true, status: false, message: "Token Expired" });
            return;
        }
        console.log(decoded);
        res.status(200).json({ error: false, status: true, message: "logined successfully",user:decoded.email });
    });
};
