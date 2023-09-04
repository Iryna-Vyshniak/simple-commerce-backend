const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const reviewSchema = new Schema(
  {
    avatarURL: { type: String, default: '' },
    name: { type: String, default: '' },
    rating: {
      type: Number,
      default: 0,
      required: [true, 'Rate the project'],
    },
    feedback: {
      type: String,
      default: '',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

reviewSchema.post('save', handleMongooseError);

const Review = model('review', reviewSchema);

module.exports = Review;
