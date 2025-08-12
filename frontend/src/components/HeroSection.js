import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', color: '#fff', textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 60%, rgba(33,150,243,0.7) 100%)',
      borderRadius: 4, boxShadow: 6, mb: 4, mt: 2, p: 4,
      backdropFilter: 'blur(2px)',
    }}
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>
        Welcome to Rental Bliss
      </Typography>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 400 }}>
        Find your perfect home, manage your rentals, and enjoy peace of mind.
      </Typography>
      <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 600, boxShadow: 3 }}>
        Get Started
      </Button>
    </Box>
  );
}

export default HeroSection;
