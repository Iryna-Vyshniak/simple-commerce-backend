const Product = require('../../models/product');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../helpers');

const getById = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById({ _id: productId });

  if (!product) {
    throw HttpError(404, 'Not Found');
  }

  res.json(product);
};

module.exports = ctrlWrapper(getById);
