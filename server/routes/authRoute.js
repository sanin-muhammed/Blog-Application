const express = require("express");
const { register, login } = require("../controller/authController");
const { auth } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/auth", auth);

module.exports = router;
