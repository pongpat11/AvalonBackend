const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    playerInRoom: [String],
    friend: [String]
});

module.exports = mongoose.model('room', RoomSchema);