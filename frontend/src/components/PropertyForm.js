import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function PropertyForm({ onSuccess, property }) {
  const [form, setForm] = useState({
    name: property?.name || '',
    address: property?.address || '',
    rent: property?.rent || ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (property) {
        await axios.put(`/api/properties/${property._id}`, form);
      } else {
        await axios.post('/api/properties', form);
      }
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Error saving property');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Address" name="address" value={form.address} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Rent" name="rent" value={form.rent} onChange={handleChange} fullWidth margin="normal" type="number" />
      <Button type="submit" variant="contained" color="primary">{property ? 'Update' : 'Add'} Property</Button>
    </Box>
  );
}

export default PropertyForm;
