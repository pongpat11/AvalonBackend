const Room = require('../../../schema/Room');

module.exports = async (room) => {
    const newRoom = new Room(room);
    try{
        const data = await newRoom.save();
        return data;
    } catch (err) {
        return null;
    }
} 