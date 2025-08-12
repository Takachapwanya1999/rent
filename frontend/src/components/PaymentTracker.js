
import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Avatar, Box } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import axios from 'axios';

function PaymentTracker() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/payments')
      .then(res => setPayments(res.data))
      .catch(() => setPayments([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Payments</Typography>
      {loading ? <CircularProgress aria-label="Loading payments" /> : (
        <Box>
          {payments.map(payment => (
            <Box key={payment._id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 2 }}><PaymentIcon /></Avatar>
              <Box>
                <Typography variant="h6">Tenant: {payment.tenant}</Typography>
                <Typography variant="body2">Amount: ${payment.amount}</Typography>
                <Typography variant="body2">Date: {payment.date}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default PaymentTracker;
