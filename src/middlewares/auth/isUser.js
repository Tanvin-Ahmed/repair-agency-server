const jwt = require("jsonwebtoken");
const { app } = require("../../config/app");

module.exports.isUser = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, app.jwt_secrate);
    req.user = decoded.data;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token!" });
  }
};
