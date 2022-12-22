const express = require("express");
const {
  getAllCategory,
  getAllCategoryName,
} = require("../post/category/category.controller");

const route = express.Router();

route.get("/all", getAllCategory);
route.get("/all-name", getAllCategoryName);

module.exports = route;
