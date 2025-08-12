const express = require('express');
const router = express.Router();
const Maintenance = require('../models/Maintenance');

// Get all maintenance requests
router.get('/', async (req, res) => {
  const requests = await Maintenance.find().populate('property');
  res.json(requests);
});

// Add new request
router.post('/', async (req, res) => {
  const request = new Maintenance(req.body);
  await request.save();
  res.json(request);
});

// Update request
router.put('/:id', async (req, res) => {
  const request = await Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(request);
});

// Delete request
router.delete('/:id', async (req, res) => {
  await Maintenance.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
