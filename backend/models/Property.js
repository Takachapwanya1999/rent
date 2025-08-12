const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  rent: { type: Number, required: true },
});

module.exports = mongoose.model('Property', propertySchema);
