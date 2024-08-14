const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    // คุณสามารถเพิ่มฟังก์ชันการตรวจสอบ username และ password ได้ที่นี่
    res.json({ message: 'Logged in successfully' });
});

module.exports = router;
