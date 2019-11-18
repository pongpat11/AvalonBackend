const User = require('../../../schema/User');

module.exports = async (userData) => {
    try{
        const user = await userData.save();
        return res.json({
            success: true,
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err
        });
    }
} 