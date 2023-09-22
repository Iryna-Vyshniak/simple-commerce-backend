const Joi = require('joi');

const validProduct = Joi.object({
  imgURL: Joi.string().allow('').optional(),
  gallery: Joi.object({
    thumbnail: Joi.string().allow('').optional(),
    bigShoe: Joi.string().allow('').optional(),
  }),
  name: Joi.string().max(250).required().label('Title').messages({
    'any.required': 'Title is required.',
  }),
  rating: Joi.number().max(5).min(0).integer().required(),
  price: Joi.number().integer().required(),
  promo: Joi.string().allow('').optional(),
  description: Joi.string(),
  popular: Joi.object({
    thumbnail: Joi.string().allow('').optional(),
    bigShoe: Joi.string().allow('').optional(),
  }),
  category: Joi.array().items(Joi.string()).required(),
  color: Joi.array().items(Joi.string()).required(),
  size: Joi.array().items(Joi.string()).required(),
  viewsCount: Joi.number().integer().min(0).required(),
});

module.exports = validProduct;
