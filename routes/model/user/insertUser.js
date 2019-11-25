const User = require('../../../schema/User');

module.exports = async (user) => {
    try{
        const userData = new User(user);
        const data = await userData.save();
        return JSON.parse(JSON.stringify(data))
    } catch (err) {
        throw err;
    }
} 