const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {generateToken, generateRefreshToken} = require('../utils/generateToken');
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

    const generateAccessToken = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    res.json({ generateAccessToken, refreshToken });
});

// Token Refresh Route
router.post('/token', async (req, res) => {
    const { refreshToken } = req.body;
    // Verify refreshToken and issue new tokens
    const user = await getUserByRefreshToken(refreshToken);
    if (!user) return res.sendStatus(403);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    // Update stored refreshToken

    res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
});


// Logout Route (In practice, you might handle this client-side)
router.post('/logout', (req, res) => {
    res.json({ message: 'Logged out' });
});

module.exports = router;
