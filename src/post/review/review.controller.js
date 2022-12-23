const { createReveiw, findAllReviews } = require("./review.service");

const makeReview = async (req, res) => {
  try {
    const review = req.body;
    const newReview = await createReveiw(review);
    return res.status(200).json(newReview);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await findAllReviews();
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  makeReview,
  getAllReviews,
};
