const jwt = require("jsonwebtoken");

// Secret key for JWT
const JWT_SECRET = "userJWT";
const expiresIn = "2h";

exports.createJWT = async (user) => {
    console.log({user});
    return jwt.sign(user, JWT_SECRET, { expiresIn });
};
