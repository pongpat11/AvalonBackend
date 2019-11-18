const User = require('../../../schema/Room');

module.exports = async (room) => {
    const roomData = await User.find(room);
    return roomData;
} 
