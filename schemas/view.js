const Joi = require('joi');

const validView = Joi.object({
  title: Joi.string()
    .allow('')
    .optional(),
  text: Joi.string()
    .allow('')
    .optional(),
});

module.exports = validView;
