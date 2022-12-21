const mongoose = require("mongoose");
const { app } = require("../../config/app");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    adminEmail: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports.AdminModel = mongoose.model(app.admin_collection, adminSchema);
