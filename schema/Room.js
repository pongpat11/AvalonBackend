const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    
    // Room data
    roomName: {
        type: String,
        required: true,
    },
    roomPassword: {
        type: String,
        required: false
    },
    roomMode: {
        type: String,
        default: 'Normal',
        required: true
    },
    leader: {
        type: String,
        required: true
    },
    player: [{
        playerName: {
            type: String,
            required: true
        },
        playerRole: {
            type: String,
            default: 'Normal'
        },
        photoUrl: {
            type: String,
            required: false
        }
    }],

    // Game data
    gamePhase: {
        type: Number,
        default: 0
    },
    missionResult: [{
        round: {
            type: Number,
            required: true
        },
        round: {
            type: Number,
            required: true
        }
    }]
})

module.exports = mongoose.model('room', RoomSchema);