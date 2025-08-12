import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function TenantForm({ onSuccess, tenant }) {
  const [form, setForm] = useState({
    name: tenant?.name || '',
    email: tenant?.email || '',
    phone: tenant?.phone || ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // If editing, update; if adding, pass new tenant data
    if (onSuccess) onSuccess(form);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">{tenant ? 'Update' : 'Add'} Tenant</Button>
    </Box>
  );
}

export default TenantForm;
