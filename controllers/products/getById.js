const Product = require('../../models/product');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../helpers');

const getById = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findOneAndUpdate(
    { _id: productId },
    { $inc: { viewsCount: 1 } },
    { new: true }
  );

  if (!product) {
    throw HttpError(404, 'Not Found');
  }

  res.json(product);
};

module.exports = ctrlWrapper(getById);
