const Review = require('../../models/review');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../helpers');

const { pagination } = require('../../utils');

const getAllReviews = async (req, res) => {
  const { page: currentPage, limit: currentLimit } = req.query;
  console.log('page: ', currentPage);

  const { page, limit, skip } = pagination(currentPage, currentLimit);

  const reviews = await Review.find({}, '-createdAt, -updatedAt', { limit, skip });

  if (!reviews) {
    throw HttpError(404, 'Not found reviews');
  }

  const totalReviews = await Review.find().count();

  res.json({
    reviews,
    totalPages: Math.ceil(totalReviews / limit),
    currentPage: page,
    limit,
  });
};

module.exports = ctrlWrapper(getAllReviews);
