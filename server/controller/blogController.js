const express = require("express");
const Blog = require("../model/blogs");

exports.all_blogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        console.log("blogs = ", blogs);

        res.status(200).json({ error: false, status: true, message: "find all blogs successfully", data: blogs });
        console.log("find all blogs successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
exports.add_blog = async (req, res) => {
    console.log(req.body);
    try {
        const { title, content } = req.body;
        const newBlog = new Blog({ title, content });
        await newBlog.save();
        console.log("new blog = ", newBlog);

        res.status(200).json({ error: false, status: true, message: "blog added successfully" });
        console.log("blog added successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
exports.update_blog = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const blog = await Blog.findByIdAndUpdate(id, { title, content });
        console.log("updated blog = ", blog);

        res.status(200).json({ error: false, status: true, message: "blog updated successfully" });
        console.log("blog updated successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
exports.delete_blog = async (req, res) => {
    console.log(req.params);
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        console.log("deleted blog = ", blog);

        res.status(200).json({ error: false, status: true, message: "blog deleted successfully" });
        console.log("blog deleted successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
