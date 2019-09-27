const mongoose = require("mongoose");

const CatalogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  test: {
    type: String,
    required: true
  },
  units: {
    type: String
  },
  length: {
    type: String
  },
  width: {
    type: String
  },
  thickness: {
    type: String
  },
  quantity: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("catalog", CatalogSchema);
