const User = require('../../../schema/User');

module.exports = async (userKey) => {
    const userData = await User.findOne(userKey);
    return userData;
} 
