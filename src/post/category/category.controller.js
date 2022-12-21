const { findAllCategory } = require("./category.service");

const getAllCategory = async (req, res) => {
  try {
    const allCategory = await findAllCategory();
    return res.status(200).json(allCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCategory,
};
