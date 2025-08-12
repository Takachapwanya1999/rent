
import React, { useState, useContext } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, showNotification } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Only allow specific email and password
    if (form.email === 'chapwanyatakafakare1@gmail.com' && form.password === 'admin123') {
      login({ email: form.email });
      showNotification('Login successful!', 'success');
      navigate('/');
    } else {
      setError('Invalid credentials');
      showNotification('Login failed', 'error');
    }
    setLoading(false);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="Password" name="password" value={form.password} onChange={handleChange} fullWidth margin="normal" type="password" required />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Box>
  );
}

export default Login;
