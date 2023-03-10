const jwt = require("jsonwebtoken");
const { app } = require("../../config/app");

module.exports.generateToken = (data) => {
  const token = jwt.sign({ data }, app.jwt_secrate, { expiresIn: "5d" });

  return token;
};
