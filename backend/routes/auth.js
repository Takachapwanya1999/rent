const express = require('express');
const router = express.Router();

// Only allow landlord login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'chapwanyatakafakare1@gmail.com' && password === 'admin123') {
    res.json({ user: { email } });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
