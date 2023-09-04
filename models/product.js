const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const productSchema = new Schema(
  {
    imgURL: { type: String, default: '' },
    name: { type: String, default: 'Nike Sport' },
    price: { type: String, default: '$10' },
    description: { type: String, default: 'Nike Sport and Features' },
    popular: {
      thumbnail: { type: String, default: '' },
      bigShoe: { type: String, default: '' },
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post('save', handleMongooseError);

const Product = model('product', productSchema);

module.exports = Product;
