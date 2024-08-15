function checkRole(role){
    return function (req, res, next){
        try{
            if (!req.headers.authorization){
                return res.status(401).json({ status: 'error', message: 'No token provided'})
            }
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, secret);
            if (decoded.role === role){
                next();
            }else{
                res.status(403).json({ status: 'error', message:'Forbidden' });
            }

        }catch (err){
            res.status(401).json({ status: 'error', message: 'Unauthorized' })
        }
        

    };
}


// const checkRole = (role) => (req, res, next) => {
//     if (req.user.role !== role) return res.status(403).json({ message: 'Access forbidden' });
//     next();
// };

// module.exports = checkRole;

module.exports = { checkRole };