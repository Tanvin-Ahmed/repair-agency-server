const jwt = require("jsonwebtoken");
const { app } = require("../../config/app");

module.exports.isAdmin = async (req, res, next) => {
  try {
    let token =
      req.body.token || req.query.token || req.headers["authorization"];
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, app.jwt_secrate);
    req.user = decoded.data;
    if (decoded.data.isAdmin) {
      return next();
    }
    return res.status(403).json({ message: "Not admin!" });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token!" });
  }
};
