const mongoose = require("mongoose");

const listofevents = new mongoose.Schema({
    email:{
        type:String
    },
    user_id:{
        type:String
    },
    title:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    organizer:{
        type:String,
        required: true
    },
    image:{
        type:String,
        // required: true
    },
    city:{
        type:String,
        // required:true
    },
    state:{
        type:String,
        // required:true
    }
})

module.exports = mongoose.model('listofevents',listofevents);