const mongoose = require("mongoose");

//BUILDING OUR SCHEMA
const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      // Date: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//CREATING THE MODEL
const clientInfo = mongoose.model("clientInfo", clientSchema);
//EXPORT MODEL
module.exports = clientInfo;
