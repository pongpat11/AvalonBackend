const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    playerInRoom: [{
        userName: String,
        role: Number
    }],
    roomStatus: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('room', RoomSchema);