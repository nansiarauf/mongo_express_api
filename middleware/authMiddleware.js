const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) return res.status(403).send("user not authorised");

  //VERIFY TOKEN WITH CODE
  const verifyToken = jwt.verify(token, process.env.SECRET_CODE);
  req.user = verifyToken;
  next();
};
module.exports = protect;
