const findUser = require('../../model/user/findUser');

module.exports = async (req, res) => {
    const user = {
        username: req.body.username,
    }
    try {
        // Input invalid
        const userData = await findUser(user);
        delete userData[0].password;
        return res.status(200).json({
            success: true,
            message: 'User found',   
            userData: userData[0]
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err
        });
    }
}