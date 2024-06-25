const mongoose = require("mongoose");

const users = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true,
    },
    confirmpassword:{
        type:String,
        required: true
    },
    bio:{
        type:String,
        required:true
    },
    profile:{
        type:String,
    }
})

module.exports = mongoose.model('User',users);