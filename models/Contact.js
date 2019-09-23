const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  unit_system: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    default: Date.now
  },
  minL: {
    type: String
  },
  minW: {
    type: String
  },
  minT: {
    type: String
  },
  maxL: {
    type: String
  },
  maxW: {
    type: String
  },
  maxT: {
    type: String
  },
  mat_cost: {
    type:String
  },
  comp_factor:{
    type: String
  }
});

module.exports = mongoose.model("contact", ContactSchema);
