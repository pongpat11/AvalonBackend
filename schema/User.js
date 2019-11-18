const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    username: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true
    },
    friend: [String]
});

module.exports = mongoose.model('user', UserSchema);