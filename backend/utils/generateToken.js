const jwt = require('jsonwebtoken');

const generateToken = (user) =>{
    return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET,{
        expiresIn: '1h'
    });
};

const generateRefreshToken = (user, err) => {
    if (err) return req.sendStatus(403)
    const refreshToken = uuidv4();
    // Store refreshToken securely in your database
    return refreshToken
    
    
}

module.exports = {generateToken, generateRefreshToken};