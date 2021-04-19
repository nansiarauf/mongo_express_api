const User = require("../models/usersSchema");
const bcrypt = require("bcryptjs");
const { validateAddUser } = require("../utils/userValidations");
const jwt = require("jsonwebtoken");

//ADDING A USER
const addUser = async (req, res) => {
  //VALIDATING A USER
  const { error } = validateAddUser.validate(req.body);
  if (error) return res.send(error.details[0].message);

  //setting complexity level and hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  // const { name, email, password } = req.body;

  //FIND USER FROM DATABASE
  const foundEmail = await User.findOne({ email: req.body.email });
  if (foundEmail) return res.status(403).send("email already exist");
  //CHECKING USERNAME
  const foundUsername = await User.findOne({ username: req.body.username });
  if (foundUsername) return res.status(403).send("username taken already");

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
    // name,
    // email,
    // password,
  });
  await newUser.save();
  res.status(201).json(newUser);
};
const userLogin = async (req, res) => {
  //USER VERIFICATION
  const client = await User.findOne({ email: req.body.email });
  if (!client) return res.status(404).send("client account not found");

  //VERIFY PASSWORD
  const verifiedPass = await bcrypt.compare(req.body.password, client.password);
  if (!verifiedPass) return res.status(404).send("Invalid email or password ");

  //ASSIGN TOKEN
  const token_id = jwt.sign({ _id: client._id }, process.env.SECRET_KEY, { expiresIn: "30d" });
  res.header("authorization", token_id).send(token_id);
};
module.exports = { addUser, userLogin };
