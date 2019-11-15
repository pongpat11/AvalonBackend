const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = () => {
    let token = req.headers['authorization'];
    
    return (req, res, next) => {
        if (token) {
            if(token.startWith('Bearer ')) {
                token = token.slice(7, token.length);
            }

            jwt.verify(token, process.env.jwt, (err, decoded) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    if (decoded) {
                        return res.status(200).json({
                            success: true,
                            message: 'Token is valid'
                        });
                    } else {
                        return res.status(400).json({
                            success: true,
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