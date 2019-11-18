const findRoom = require('../model/user/findRoom');

module.exports = async (req, res) => {
    const room = {
        roomStatus: 'wating'
    }
    try {
        // Input invalid
        const roomData = await findUser(room);
        if (userData) {
            return res.status(200).json({
                success: true,
                message: 'Login success',
                token: roomData
            });
        } else {
            return res.json({
                success: false,
                message: 'invalid email or password'
            });
        }
    } catch (err) {
        res.json({message: err});
    }
}