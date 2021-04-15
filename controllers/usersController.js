const User = require("../models/usersSchema");
const { validateAddUser } = require("../utils/userValidations");
const jwt = require("jsonwebtoken");

//ADDING A USER
const addUser = async (req, res) => {
  const { error } = validateAddUser.validate(req, body);

  //catching errors and responding
  if (error) return res.send(error.details[0].message);
  //setting complexity level and hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password);
  const { name, email, password } = req.body;
  const newUser = new User({
    // name: req.body.name,
    // email: req.body.email,
    // password: req.body.password,
    name,
    email,
    password,
  });
  const userCreated = await newUser.save();
  res.status(201).json(userCreated);
};
module.exports = { addUser };
