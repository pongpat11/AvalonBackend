const User = require('../../schema/User');

module.exports = async (userData) => {
    try{
        const user = await userData.save();
        return {
            success: true,
        }
    } catch (err) {
        return {
            success: false,
            message: err
        }   
    }
} 