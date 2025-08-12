import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alice Smith',
    text: 'I found my dream apartment and the landlord is amazing! Highly recommended.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bob Jones',
    text: 'Managing my rentals has never been easier. The dashboard is fantastic!',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Sarah Lee',
    text: 'Quick maintenance response and easy payments. Love this platform!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

function Testimonials() {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 700 }}>
        What Our Tenants Say
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.3 }} sx={{ boxShadow: 6, borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={t.avatar} alt={t.name} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{t.name}</Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">{t.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;
