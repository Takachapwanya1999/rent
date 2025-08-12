import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function PaymentForm({ onSuccess, payment }) {
  const [form, setForm] = useState({
    tenant: payment?.tenant || '',
    amount: payment?.amount || '',
    date: payment?.date || ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (payment) {
        await axios.put(`/api/payments/${payment._id}`, form);
      } else {
        await axios.post('/api/payments', form);
      }
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Error saving payment');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Tenant" name="tenant" value={form.tenant} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Amount" name="amount" value={form.amount} onChange={handleChange} fullWidth margin="normal" type="number" />
      <TextField label="Date" name="date" value={form.date} onChange={handleChange} fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} />
      <Button type="submit" variant="contained" color="primary">{payment ? 'Update' : 'Add'} Payment</Button>
    </Box>
  );
}

export default PaymentForm;
