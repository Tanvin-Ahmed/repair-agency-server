const { deleteServicesByCategory } = require("../services/service.service");
const {
  findAllCategory,
  findNameOfCategories,
  deleteCategoryByCategoryName,
} = require("./category.service");

const getAllCategory = async (req, res) => {
  try {
    const allCategory = await findAllCategory();
    return res.status(200).json(allCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllCategoryName = async (req, res) => {
  try {
    const categoriesName = await findNameOfCategories();
    return res.status(200).json(categoriesName);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = req.params.category;
    await deleteServicesByCategory(category);
    await deleteCategoryByCategoryName(category);

    return res
      .status(200)
      .json({ message: "Category deleted successfully!", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  getAllCategory,
  getAllCategoryName,
  deleteCategory,
};
