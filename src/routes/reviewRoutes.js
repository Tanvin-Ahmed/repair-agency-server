const express = require("express");
const { isUser } = require("../middlewares/auth/isUser");
const {
  makeReview,
  getAllReviews,
} = require("../post/review/review.controller");

const route = express.Router();

route.post("/add", isUser, makeReview);
route.get("/getAll", getAllReviews);

module.exports = route;
