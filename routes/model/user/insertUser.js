const User = require('../../../schema/User');

module.exports = async (user) => {
    try{
        const data = await user.save();
        return {
            success: true,
            userData: data
        };
    } catch (err) {
        return {
            success: false,
            message: err
        };
    }
} 