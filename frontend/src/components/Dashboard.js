

import React from 'react';
import { Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import Footer from './Footer';

const data = [
  { name: 'Jan', payments: 400 },
  { name: 'Feb', payments: 300 },
  { name: 'Mar', payments: 500 },
  { name: 'Apr', payments: 200 },
];

function Dashboard() {
  return (
    <>
      <HeroSection />
      <Box sx={{ background: 'rgba(255,255,255,0.85)', borderRadius: 4, boxShadow: 6, p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Typography variant="body1">Summary stats and charts:</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="payments" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Testimonials />
      <Footer />
    </>
  );
}

export default Dashboard;
