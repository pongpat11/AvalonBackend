const findUser = require('../model/user/findUser');

module.exports = async (req, res) => {
    const user = {
        _id: req._id
    }
    try {
        // Input invalid
        const userData = await findUser(user);
        if (userData) {
            return res.status(200).json({
                success: true,
                message: 'User found',   
                userData: userData[0]
            });
        } else {
            return res.json({
                success: false,
                message: 'User not found'
            });
        }
    } catch (err) {
        res.json({message: err});
    }
}