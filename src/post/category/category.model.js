const mongoose = require("mongoose");
const { app } = require("../../config/app");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    category: {
      type: String,
      require: true,
    },
    image: {
      type: Object,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports.CategoryModel = mongoose.model(
  app.category_collection,
  categorySchema
);
