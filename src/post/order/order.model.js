const mongoose = require("mongoose");
const { app } = require("../../config/app");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
      require: true,
    },
    paymentId: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    serviceName: {
      type: String,
      require: true,
    },
    fee: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports.OrderModel = mongoose.model(app.order_collection, orderSchema);
