

import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Avatar, Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TenantForm from './TenantForm';

function TenantList() {
  const [tenants, setTenants] = useState([
    { _id: '1', name: 'Alice Smith', email: 'alice@example.com', phone: '1234567890' },
    { _id: '2', name: 'Bob Jones', email: 'bob@example.com', phone: '0987654321' }
  ]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Simulate fetch
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get('/api/tenants')
  //     .then(res => setTenants(res.data))
  //     .catch(() => setTenants([]))
  //     .finally(() => setLoading(false));
  // }, []);

  const handleAddTenant = (newTenant) => {
    setTenants([...tenants, { ...newTenant, _id: Date.now().toString() }]);
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Tenants</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => setOpen(true)}>
        Add Tenant
      </Button>
      {loading ? <CircularProgress aria-label="Loading tenants" /> : (
        <Box>
          {tenants.map(tenant => (
            <Box key={tenant._id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 2 }}><PeopleIcon /></Avatar>
              <Box>
                <Typography variant="h6">{tenant.name}</Typography>
                <Typography variant="body2">{tenant.email}</Typography>
                <Typography variant="body2">Phone: {tenant.phone}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Tenant</DialogTitle>
        <DialogContent>
          <TenantForm onSuccess={handleAddTenant} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default TenantList;
