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
    name: {
        type: String,
        required: true,
    },
    profilePic: String,
    friend: [String]
});

module.exports = mongoose.model('user', UserSchema);