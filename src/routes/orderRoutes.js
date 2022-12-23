const express = require("express");
const { isAdmin } = require("../middlewares/auth/isAdmin");
const { isUser } = require("../middlewares/auth/isUser");
const {
  makeOrder,
  getUserOrders,
  getAllOrders,
  updateOrder,
} = require("../post/order/order.controller");

const route = express.Router();

route.post("/placeOrder", isUser, makeOrder);
route.get("/userOrderList/:email", isUser, getUserOrders);
route.get("/getFullOrderList", isAdmin, getAllOrders);
route.put("/updateStatus/:id", isAdmin, updateOrder);

module.exports = route;
