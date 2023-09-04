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
  popular: Joi.array().items(
    Joi.object({
      thumbnail: Joi.string()
        .allow('')
        .optional(),
      bigShoe: Joi.string()
        .allow('')
        .optional(),
    })
  ),
});

module.exports = validProduct;
