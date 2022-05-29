const Joi = require("joi");

const contactShema = Joi.object({
  name: Joi.string().max(15).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/),
  favorite: Joi.bool(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = { contactShema, favoriteJoiSchema };
