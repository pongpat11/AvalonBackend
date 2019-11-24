const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = () => {
    return (req, res, next) => {
        let token = req.headers['authorization'];
        if (token) {
            if(token.startsWith('Bearer ')) {
                token = token.slice(7, token.length);
            }

            jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: err
                    });
                } else {
                    if (decoded) {
                        req.userID = decoded._id;
                        next();
                    } else {
                        return res.status(400).json({
                            success: false,
                            message: 'Token is not valid'
                        });
                    }
                }
            })
        } else {
            return res.status(400).json({
                success: false,
                message: 'Token not found'
            });
        }
    }
}