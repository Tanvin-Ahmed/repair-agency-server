const express = require("express");
const { isAdmin } = require("../middlewares/auth/isAdmin");
const {
  addService,
  getServicesByCategory,
  getServicesById,
  deleteSerivce,
  modifyService,
  getServiceByIdWithoutImg,
} = require("../post/services/service.controller");

const route = express.Router();

route.post("/add", isAdmin, addService);
route.get("/serviceItem/:category", getServicesByCategory);
route.get("/:id", getServicesById);
route.get("/service-without-img/:id", getServiceByIdWithoutImg);
route.put("/update/:id", isAdmin, modifyService);
route.delete("/deleteServiceItem/:id", isAdmin, deleteSerivce);

module.exports = route;
