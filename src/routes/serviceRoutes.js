const express = require("express");
const {
  addService,
  getServicesByCategory,
  getServicesById,
  deleteSerivce,
  deleteSerivces,
  modifyService,
} = require("../post/services/service.controller");

const route = express.Router();

route.post("/add", addService);
route.get("/serviceItem/:category", getServicesByCategory);
route.get("/:id", getServicesById);
route.put("/update/:id", modifyService);
route.delete("/deleteServiceItem/:id", deleteSerivce);
route.delete("/deleteCategory", deleteSerivces);

module.exports = route;
