const express = require("express");
const {
  getAllCategory,
  getAllCategoryName,
  deleteCategory,
} = require("../post/category/category.controller");

const route = express.Router();

route.get("/all", getAllCategory);
route.get("/all-name", getAllCategoryName);
route.delete("/deleteCategory/:category", deleteCategory);

module.exports = route;
