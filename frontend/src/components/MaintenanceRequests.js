
import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Avatar, Box } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import axios from 'axios';

function MaintenanceRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/maintenance')
      .then(res => setRequests(res.data))
      .catch(() => setRequests([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Maintenance Requests</Typography>
      {loading ? <CircularProgress aria-label="Loading requests" /> : (
        <Box>
          {requests.map(request => (
            <Box key={request._id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 2 }}><BuildIcon /></Avatar>
              <Box>
                <Typography variant="h6">{request.description}</Typography>
                <Typography variant="body2">Status: {request.status}</Typography>
                <Typography variant="body2">Property: {request.property}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default MaintenanceRequests;
