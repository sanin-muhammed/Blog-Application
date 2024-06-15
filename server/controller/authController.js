const express = require("express");
const User = require("../model/users");
const { createJWT } = require("../utils/jwt");

exports.register = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            res.status(400).json({ error: true, status: false, message: "user already exist" });
            console.log("user already exist".bold.red);
            return;
        }
        const newUser = new User({ email, password });
        await newUser.save();
        console.log({ newUser });

        res.status(200).json({ error: false, status: true, message: "user registered successfully" });
        console.log("user registered successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};


exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await User.findOne({ email,password });
        if (!user) {
            res.status(400).json({ error: true, status: false, message: "user not exist" });
            console.log("user not exist".bold.red);
            return;
        }
        const data = {
            email:user.email,
        }
        const token = await createJWT(data);
        console.log({ token });
        res.status(200).json({ error: false, status: true, message: "user logined successfully",token });
        console.log("user logined successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red,error);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
