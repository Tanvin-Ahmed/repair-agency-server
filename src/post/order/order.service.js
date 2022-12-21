const mongoose = require("mongoose");
const { OrderModel } = require("./order.model");

const createOrder = async (info) => {
  return await OrderModel.create(info);
};

const findOrderListByEmail = async (email) => {
  return await OrderModel.findOne({ email });
};

const findAllOrderList = async () => {
  return await OrderModel.find({});
};

const updateOrderById = async (id, status) => {
  const _id = mongoose.Types.ObjectId(id);
  return await OrderModel.findByIdAndUpdate(_id, { status }, { new: true });
};

module.exports = {
  createOrder,
  findOrderListByEmail,
  findAllOrderList,
  updateOrderById,
};
