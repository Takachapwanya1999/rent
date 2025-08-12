const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');

// Get all tenants
router.get('/', async (req, res) => {
  const tenants = await Tenant.find();
  res.json(tenants);
});

// Add new tenant
router.post('/', async (req, res) => {
  const tenant = new Tenant(req.body);
  await tenant.save();
  res.json(tenant);
});

// Update tenant
router.put('/:id', async (req, res) => {
  const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tenant);
});

// Delete tenant
router.delete('/:id', async (req, res) => {
  await Tenant.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
