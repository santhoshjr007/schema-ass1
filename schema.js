const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],     
        default: ['user'],
    },
    profile: {
        firstName: String,
        lastName: String,
        age: {
            type: Number,
            min: 0,
        },
    },
    lastLogin: {
        type: Date,
        default: null,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;