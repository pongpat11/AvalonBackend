const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true
    },
    friend: [String]
});

module.exports = mongoose.model('user', UserSchema);