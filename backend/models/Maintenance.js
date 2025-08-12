const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  description: { type: String, required: true },
  status: { type: String, default: 'Open' },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
