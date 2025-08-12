const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Get all properties
router.get('/', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Add new property
router.post('/', async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.json(property);
});

// Update property
router.put('/:id', async (req, res) => {
  const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(property);
});

// Delete property
router.delete('/:id', async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
