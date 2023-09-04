const Joi = require('joi');

const reviewSchema = Joi.object({
  avatarURL: Joi.string()
    .allow('')
    .optional(),
  name: Joi.string()
    .max(30)
    .required()
    .label('Title')
    .messages({
      'any.required': 'Title is required.',
    }),
  rating: Joi.number()
    .max(5)
    .min(0)
    .integer()
    .required(),
  feedback: Joi.string()
    .required()
    .messages({
      'any.required': `Missing required comment field`,
    }),
});

module.exports = {
  reviewSchema,
};
