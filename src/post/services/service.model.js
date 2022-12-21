const mongoose = require("mongoose");
const { app } = require("../../config/app");

const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    category: {
      type: String,
      require: true,
    },
    serviceName: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    fee: {
      type: String,
      require: true,
    },
    image: {
      type: Object,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports.ServiceModel = mongoose.model(
  app.service_collection,
  serviceSchema
);
