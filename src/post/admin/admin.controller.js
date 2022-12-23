const { generateToken } = require("../../middlewares/auth/generateToken");
const { findAdminByEmail, createAdmin } = require("./admin.service");

const makeAdmin = async (req, res) => {
  try {
    const info = { adminEmail: req.body.newAdmin };
    await createAdmin(info);
    return res.status(200).json({ message: "Admin created successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findAdmin = async (req, res) => {
  try {
    const { email, displayName } = req.query;
    const admin = await findAdminByEmail(email);
    if (admin) {
      const data = { email, displayName, isAdmin: true };
      const token = generateToken(data);
      return res.status(200).json({ token });
    } else {
      const data = { email, displayName, isAdmin: false };
      const token = generateToken(data);
      return res.status(200).json({ token });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  makeAdmin,
  findAdmin,
};
