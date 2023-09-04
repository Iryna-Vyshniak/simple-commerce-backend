const { Schema, model } = require('mongoose');
const handleMongooseError = require('../helpers');

const productSchema = new Schema(
  {
    imgURL: { type: String, default: '' },
    name: { type: String, default: 'Nike Sport' },
    price: { type: String, default: '$10' },
    description: { type: String, default: 'Nike Sport and Features' },
    popular: Joi.object({
      thumbnail: Joi.string()
        .allow('')
        .optional(),
      bigShoe: Joi.string()
        .allow('')
        .optional(),
    }),
  },
  { versionKey: false, timestamps: true }
);

productSchema.post('save', handleMongooseError);

const Product = model('product', productSchema);

module.exports = Product;
