const User = require('../../../schema/User');
const insertUser = require('../../model/user/insertUser');
const {validationResult} = require('express-validator');

module.exports = async (req, res) => {
    try {
        
        // Validate input
        const err = await validationResult(req);
        if(!err.isEmpty()) {
            throw 'Invalid email or password';
        }

        const user = new User({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            photoUrl: req.body.photoUrl
        });

        const insertResult = await insertUser(user);
        return res.status(200).json({
            success: true,
            message: 'Insert user is successful',
            userData: insertResult.userData
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err
        });
    }
}