import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ mt: 6, py: 3, textAlign: 'center', background: 'rgba(33,150,243,0.1)', borderTop: '1px solid #e0e0e0' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Rental Bliss. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="mailto:info@rentalbliss.com" color="inherit" sx={{ mx: 1 }}>Contact</Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Facebook</Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Twitter</Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Instagram</Link>
      </Box>
    </Box>
  );
}

export default Footer;
