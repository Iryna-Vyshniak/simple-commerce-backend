const Joi = require('joi');

const validProduct = Joi.object({
  imgURL: Joi.string()
    .allow('')
    .optional(),
  name: Joi.string()
    .max(250)
    .required()
    .label('Title')
    .messages({
      'any.required': 'Title is required.',
    }),
  price: Joi.number()
    .max(5)
    .min(0)
    .integer()
    .required(),
  description: Joi.string(),
  popular: {
    thumbnail: { type: String, default: '' },
    bigShoe: { type: String, default: '' },
  },
});

module.exports = validProduct;
