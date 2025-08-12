import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function MaintenanceForm({ onSuccess, request }) {
  const [form, setForm] = useState({
    description: request?.description || '',
    status: request?.status || 'Open',
    property: request?.property || ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (request) {
        await axios.put(`/api/maintenance/${request._id}`, form);
      } else {
        await axios.post('/api/maintenance', form);
      }
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Error saving request');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Status" name="status" value={form.status} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Property" name="property" value={form.property} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">{request ? 'Update' : 'Add'} Request</Button>
    </Box>
  );
}

export default MaintenanceForm;
