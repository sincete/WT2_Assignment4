const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, invalid token' });
    }
};


exports.adminOnly = (req, res, next) => {

    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied: Admins only' });
    }
};