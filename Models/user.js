// This is the Schema to explain and disturibe the user data types with name 

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name : {
        // user name
        type : String,
        requried : [true, "User must type name"],
        unique : true,
    },
    token : {
        // connection id
        type :  String,
    },

    online : {
        // user status(online, offline)
        type : Boolean,
        default : false,
    },

});

module.exports = mongoose.model("User", userSchema);