const express = require("express");
const { isAdmin } = require("../middlewares/auth/isAdmin");
const {
  getAllCategory,
  getAllCategoryName,
  deleteCategory,
} = require("../post/category/category.controller");

const route = express.Router();

route.get("/all", getAllCategory);
route.get("/all-name", getAllCategoryName);
route.delete("/deleteCategory/:category", isAdmin, deleteCategory);

module.exports = route;
