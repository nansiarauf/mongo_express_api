const express = require("express");
const { userLogin, addUser } = require("../controllers/usersController");

//INITIALIZE ROUTER
const router = express.Router();

router.route("/register").post(addUser);
router.route("/login").post(userLogin);

module.exports = router;
