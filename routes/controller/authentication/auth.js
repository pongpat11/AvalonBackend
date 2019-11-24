const jwt = require('jsonwebtoken');
const findUser = require('../../model/user/findUser');
const {validationResult} = require('express-validator');
require('dotenv/config');

module.exports = async (req, res) => {
    try {
        // Input invalid
        const err = await validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Wrong input email or password'
            })
        }

        const user = {
            email: req.body.email,
            password: req.body.password,
        }

        const userData = await findUser(user);
        delete userData[0].password;
        const token = jwt.sign(userData[0], process.env.jwtSecret, {expiresIn: '24h'});
        return res.status(200).json({
            success: true,
            message: 'Login success',
            token: token,
            userData: userData[0]
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err
        });
    }
}