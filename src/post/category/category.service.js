const { CategoryModel } = require("./category.model");

const createCategory = async (info) => {
  return await CategoryModel.create(info);
};

const findAllCategory = async () => {
  return await CategoryModel.find({});
};

const findNameOfCategories = async () => {
  return await CategoryModel.find({}).select("category");
};

const deleteCategoryByCategoryName = async (categoryName) => {
  return await CategoryModel.deleteOne({ category: categoryName });
};

module.exports = {
  createCategory,
  findAllCategory,
  deleteCategoryByCategoryName,
  findNameOfCategories,
};
