const Joi = require("joi");

const validateAddUser = new Joi.object({
  username: Joi.string().required().min(5),
  email: Joi.string().email().min(8),
  password: Joi.string().required().min(5),
});
module.exports = { validateAddUser };
