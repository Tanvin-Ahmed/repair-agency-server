const express = require("express");
const {
  makeReview,
  getAllReviews,
} = require("../post/review/review.controller");

const route = express.Router();

route.post("/add", makeReview);
route.get("/getAll", getAllReviews);

module.exports = route;
