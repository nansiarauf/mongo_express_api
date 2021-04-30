const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  //ASSIGN TOKEN
  const token_id = jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "30d" });
  return token_id;
};

module.exports = createToken;
