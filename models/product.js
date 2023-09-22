const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const productSchema = new Schema(
  {
    imgURL: { type: String, default: '' },
    gallery: {
      thumbnail: { type: String, default: '' },
      bigShoe: { type: String, default: '' },
    },
    name: { type: String, default: 'Nike Sport' },
    rating: { type: Number, default: 5 },
    price: { type: Number, default: 10 },
    promo: { type: String, default: '' },
    description: { type: String, default: 'Nike Sport and Features' },
    popular: {
      thumbnail: { type: String, default: '' },
      bigShoe: { type: String, default: '' },
    },
    category: {
      type: [String],
      enum: ['Kids', 'Women', 'Men'],
      default: [],
    },
    color: {
      type: [String],
      enum: ['white', 'red', 'orange', 'blue', 'red', 'green', 'yellow', 'slate'],
      default: [],
    },
    size: {
      type: [String],
      enum: [
        '3Y',
        '4Y',
        '4.5Y',
        '5Y',
        '6.5Y',
        '7Y',
        '5',
        '6',
        '6.5',
        '7',
        '7.5',
        '8',
        '8.5',
        '9',
        '9.5',
        '10',
        '10.5',
        '11',
        '11.5',
        '12',
        '12.5',
        '13',
      ],
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post('save', handleMongooseError);

const Product = model('product', productSchema);

module.exports = Product;
