const Product = require('../../models/product');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../helpers');
const { pagination } = require('../../utils');

const getAllProducts = async (req, res) => {
  const { page: currentPage, limit: currentLimit, name = '' } = req.query;

  const { page, limit, skip } = pagination(currentPage, currentLimit);

  const query = {
    ...(page && page),
    ...(name && { name: { $regex: name, $options: 'i' } }),
  };

  if (!query) {
    const products = await Product.find();

    res.json(products);
  }

  const products = await Product.find(query, '-createdAt, -updatedAt', { limit, skip });

  if (!products) {
    throw HttpError(500, 'Failed to fetch products');
  }
  const count = await Product.find(query).count();

  res.json({
    message: `Get all products`,
    products,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    limit,
  });
};

module.exports = ctrlWrapper(getAllProducts);
