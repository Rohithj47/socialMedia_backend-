const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        require: true 
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers : {
        type: Array,
        default: []
    },
    following : {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model('User', schema);
module.exports = User 

