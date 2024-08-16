//การเพิ่ม Refresh Token
const insertRefreshToken = async (userId, token, expiresAt) => {
    const query = 'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)';
    await db.execute(query, [userId, token, expiresAt]);
};

//การตรวจสอบ Refresh Token
const validateRefreshToken = async (token) => {
    const query = 'SELECT * FROM refresh_tokens WHERE token = ? AND expires_at > NOW()';
    const [rows] = await db.execute(query, [token]);
    return rows.length > 0 ? rows[0] : null;
};

//การเพิกถอน Refresh Token
const revokeRefreshToken = async (token) => {
    const query = 'DELETE FROM refresh_tokens WHERE token = ?';
    await db.execute(query, [token]);
};
