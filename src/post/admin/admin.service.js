const { AdminModel } = require("./admin.model");

const createAdmin = async (info) => {
  return await AdminModel.create(info);
};

const findAdminByEmail = async (email) => {
  return await AdminModel.findOne({ adminEmail: email });
};

module.exports = {
  createAdmin,
  findAdminByEmail,
};
