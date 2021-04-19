const express = require("express");
//destructuring and importing the controllers
const { addClientInfo, getAllClients, getAclient, updateClientInfo, deleteClient } = require("../controllers/clientController");

//initailing the Router() to a variable
const router = express.Router();

//assigning routes to the controllers
router.route("/").post(addClientInfo).get(getAllClients);
router.route("/:_id").get(getAclient).put(updateClientInfo).delete(deleteClient);

module.exports = router;
