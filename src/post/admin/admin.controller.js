const { findAdminByEmail, createAdmin } = require("./admin.service");

const makeAdmin = async (req, res) => {
  try {
    const info = { adminEmail: req.body.newAdmin };
    const admin = await createAdmin(info);
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const isAdmin = async (req, res) => {
  try {
    const admin = await findAdminByEmail(req.params.email);
    if (admin) {
      return res.status(200).json({ isAdmin: true, token: "" });
    } else {
      return res.status(404).json({ isAdmin: false });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  makeAdmin,
  isAdmin,
};
