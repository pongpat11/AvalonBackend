const User = require('../../schema/User');
const insertUser = require('../model/insertUser');
const {validationResult} = require('express-validator');

module.exports = async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });
    try {
        const err = await validationResult(req);
        if(!err.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password'
            })
        }

        const insertResult = await insertUser(user);
        console.log(insertResult)
        if(insertResult.success === true) {
            return res.status(200).json({
                success: true,
                message: 'Insert user is successful'
            });
        } else {
            return res.status(400).json({
                success: false,
                message: insertResult.message
            });
        }

    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err
        });
    }
}