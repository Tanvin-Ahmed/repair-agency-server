const jwt = require("jsonwebtoken");
const { app } = require("../../config/app");

module.exports.refreshTokenGenerator = async (req, res) => {
  try {
    const { token } = req.body;
    const { data } = jwt.verify(token, app.jwt_secrate);
    const updatedToken = await jwt.sign({ data }, app.jwt_secrate, {
      expiresIn: "5d",
    });
    return res.status(200).json(updatedToken);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token not negerated!" });
  }
};
