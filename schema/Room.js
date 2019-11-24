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
            default: 'Normal'
        }
    }],

    // Game data
    gamePhase: {
        type: Number,
        default: 0
    },
    gameTeamPicking: [{
        approve: {
            type: Boolean,
            required: true
        },
        round: {
            type: Boolean,
            required: false
        }
    }],

})

module.exports = mongoose.model('room', RoomSchema);