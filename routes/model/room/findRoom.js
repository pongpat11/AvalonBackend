const Room = require('../../../schema/Room');

module.exports = async (room) => {
    const roomData = await Room.find(room);
    if (roomData.length === 0) throw 'Room not found';
    else return roomData;
} 
