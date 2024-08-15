const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');
const db = require('../database/dbconfig');
require('dotenv').config();

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);
    res.json({ token });
});

// Logout Route (In practice, you might handle this client-side)
router.post('/logout', (req, res) => {
    res.json({ message: 'Logged out' });
});

module.exports = router;
