const mongoose = require("mongoose");
const { app } = require("../../config/app");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    rate: {
      type: String,
      require: true,
    },
    review: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports.ReviewModel = mongoose.model(
  app.review_collection,
  reviewSchema
);
