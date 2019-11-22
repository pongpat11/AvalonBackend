const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false
    },
    leader: {
        type: String,
        required: true,
    },
    player: [{
        playerName: {
            type: String,
            required: true
        },
        playerRole: {
            type: String,
            required: false
        }
    }]
})

module.exports = mongoose.model('room', RoomSchema);