const User = require('../../../schema/User');

module.exports = async (user) => {
    const userData = await User.find(user);
    if (userData.length === 0) throw 'User not found';
    else return userData;
}
