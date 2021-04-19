const Joi = require("joi");

// const validateAddUser = new Joi.object({
//   name: Joi.string().min(2).required().max(150),
//   email: Joi.string().min(10).max(200).email().required(),
//   password: Joi.string().min(6).max(50).required(),
// });
// module.exports = { validateAddUser };

const validateClient = new Joi.object({
  name: Joi.string().required().min(5),
  email: Joi.string().email().required().min(8),
});

module.exports = { validateClient };
