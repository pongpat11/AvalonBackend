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
    friend: [String]
});

module.exports = mongoose.model('room', RoomSchema);