const express = require("express");
const {
  makeOrder,
  getUserOrders,
  getAllOrders,
  updateOrder,
} = require("../post/order/order.controller");

const route = express.Router();

route.post("/placeOrder", makeOrder);
route.get("/userOrderList/:email", getUserOrders);
route.get("/getFullOrderList", getAllOrders);
route.put("/updateStatus/:id", updateOrder);

module.exports = route;
