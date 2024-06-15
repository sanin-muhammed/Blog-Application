const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
})

const Blog = mongoose.model('blogs',blogSchema)
module.exports = Blog