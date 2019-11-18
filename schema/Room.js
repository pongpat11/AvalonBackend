const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    name: {
        type: String,
        required: true,
    },
    profilePic: String,
    friend: [String]
});

module.exports = mongoose.model('room', RoomSchema);