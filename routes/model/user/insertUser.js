const User = require('../../../schema/User');

module.exports = async (user) => {
    try{
        const data = await user.save();
        return JSON.parse(JSON.stringify(data))
    } catch (err) {
        throw err;
    }
} 