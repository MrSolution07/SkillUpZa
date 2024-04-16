const { m } = require('framer-motion');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    mo_number: {
        type: Number,
        required: true,
        trim: true
    }
});

const UsersModel = mongoose.model('Users', UserSchema);
module.exports = Users;

