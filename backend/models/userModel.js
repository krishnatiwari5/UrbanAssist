const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userFirstName : {
        type : String,
        required : [true, "Please Enter Your First Name"]
    },
    
    userLastName : {
        type : String,
        required : [true, "Please Enter Your Last Name"]
    },

    userEmail : {
        type : String,
        required : [true, "Please Enter Your Email id"],
        unique : [true, "Email Id already exit"]
    },

    userPassword : {
        type : String,
        required : [true, "Please enter your password"]
    }
}, 
{
    timestamps : true
})


module.exports = mongoose.model("users", userSchema)