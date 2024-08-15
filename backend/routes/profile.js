const express = require('express');
const authenticate = require('../middlewares/auth');
const db = require('../database/dbconfig');

const router = express.Router();

// Get User Profile
router.get('/profile', authenticate, async (req, res) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [req.user.id]);
    const user = rows[0];
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

module.exports = router;
