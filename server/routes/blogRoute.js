const express = require("express");
const { auth } = require("../middleware/authMiddleware");
const { all_blogs, add_blog, update_blog, delete_blog } = require("../controller/blogController");
const router = express.Router();

router.get("/blogs",all_blogs)
router.post("/blogs",add_blog)
router.post("/blogs/:id",update_blog)
router.delete("/blogs/:id",delete_blog)


module.exports = router