const Room = require('../../../schema/Room');

module.exports = async (room) => {
    try{
        const data = await room.save();
        return {
            success: true,
            roomData: data
        };
    } catch (err) {
        throw err;
    }
} 