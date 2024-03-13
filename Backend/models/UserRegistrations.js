const mongoose = require("mongoose");

const userevents = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    event_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        // required: true
    }
})

module.exports = mongoose.model('userevents',userevents);