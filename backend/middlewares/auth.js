const jwt = require('jsonwebtoken');

const authenticate = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if(token === null)return res.status(401);

    jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return req.sendStatus(403);
        req.user = user;
        next();
    })
}

module.exports = authenticate;