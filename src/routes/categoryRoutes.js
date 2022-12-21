const express = require("express");
const { getAllCategory } = require("../post/category/category.controller");

const route = express.Router();

route.get("/all", getAllCategory);

module.exports = route;
