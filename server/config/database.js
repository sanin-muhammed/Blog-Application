const mongoose = require("mongoose");
const connectDB = async () => {
    mongoose.connect("mongodb+srv://sanin9633:bTC0JU5DZ9yXVwew@cluster0.rp6nqdg.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0");
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", () => console.log("Database Connected Successfully".bold.brightGreen));
};

module.exports = connectDB;
