const { ReviewModel } = require("./review.model");

const createReveiw = async (info) => {
  return await ReviewModel.create(info);
};

const findAllReviews = async () => {
  return await ReviewModel.find({});
};

module.exports = {
  createReveiw,
  findAllReviews,
};
