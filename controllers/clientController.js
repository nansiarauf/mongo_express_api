const clientInfo = require("../models/clientSchema");

//POST METHOD--adding data to the DB
const addClientInfo = async (req, res) => {
  const newClientInfo = new clientInfo({
    // name: "tom",
    // age: 28,
    // email: "nansia.rauf@gmail.com",
    // dob: "20/10/1990",
    // destination: "tumu",
    // phone: "0205092580",
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    dob: req.body.dob,
    destination: req.body.destination,
    phone: req.body.phone,
  });
  //saving to DB
  await newClientInfo.save();
  //sending back response
  res.status(201).json(newClientInfo);
};

//get all clients in the DB
const getAllClients = async (req, res) => {
  const clients = await clientInfo.find();
  res.json(clients);
};

//GET A SPECIFIC CLIENT FROM THE DB
const getAclient = async (req, res) => {
  //creating a variable called aClient hold the record to be accessed using the "findById method"
  const aClient = await clientInfo.findById(
    req.params._id
  );
  res.json(aClient);
};

//MAKING AN UPDATE TO A CLIENT INFO
const updateClientInfo = async (req, res) => {
  //getting client by id
  const clientFound = await clientInfo.findById(
    req.params._id
  );
  //making changes to client if clientFound = TRUE

  //   const {
  //     name,
  //     email,
  //     dob,
  //     age,
  //     phone,
  //     destination,
  //   } = req.body;
  if (clientFound) {
    clientFound.name = req.body.name
      ? req.body.name
      : clientFound.name;
    clientFound.email = req.body.email
      ? req.body.email
      : clientFound.email;
    clientFound.dob = req.body.dob
      ? req.body.dob
      : clientFound.dob;
    clientFound.age = req.body.age
      ? req.body.age
      : clientFound.age;
    clientFound.phone = req.body.phone
      ? req.body.phone
      : clientFound.phone;
    clientFound.destination = req.body.destination
      ? req.body.destination
      : clientFound.destination;
    //assigned the changes to a variable and saving it.
    const updatedClient = await clientFound.save();

    //returning the changes made in json
    res.json({ updatedClient: updatedClient });
  }
};

//DELETING CLIENT INFO
const deleteClient = async (req, res) => {
  const foundClient = await clientInfo.findById(
    req.params._id
  );
  if (foundClient) {
    foundClient.remove();
    res.json({
      msg: `client with ID:${req.params._id} deleted`,
    });
  } else {
    res
      .status(404)
      .json({ msg: "client not found" });
  }
};
module.exports = {
  addClientInfo,
  getAllClients,
  getAclient,
  updateClientInfo,
  deleteClient,
};
