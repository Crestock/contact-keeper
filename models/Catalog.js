const mongoose = require("mongoose");

const CatalogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  contactID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "contact"
  },
  name: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model("catalog", CatalogSchema);
