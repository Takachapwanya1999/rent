
import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Avatar, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

function PropertyList() {
  const [properties, setProperties] = useState([
    { _id: '1', name: 'Room 101', address: '123 Main St', rent: 500 },
    { _id: '2', name: 'Room 102', address: '123 Main St', rent: 550 }
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Properties</Typography>
      {loading ? <CircularProgress aria-label="Loading properties" /> : (
        <Box>
          {properties.map(property => (
            <Box key={property._id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 2 }}><HomeIcon /></Avatar>
              <Box>
                <Typography variant="h6">{property.name}</Typography>
                <Typography variant="body2">{property.address}</Typography>
                <Typography variant="body2">Rent: ${property.rent}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default PropertyList;
