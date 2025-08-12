import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';

function Profile() {
  // Replace with real user data
  const user = { name: 'John Doe', email: 'john@example.com' };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Avatar sx={{ width: 80, height: 80, mb: 2 }}>{user.name[0]}</Avatar>
      <Typography variant="h5">{user.name}</Typography>
      <Typography variant="body1">{user.email}</Typography>
      {/* Add settings and edit profile options here */}
    </Box>
  );
}

export default Profile;
