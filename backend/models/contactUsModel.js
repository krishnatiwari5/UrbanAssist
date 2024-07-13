const mongoose = require("mongoose")


const contactUsSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true, "Please add the contact name"]
        },
    email : { 
        type:String,
        required : [true, "Please add the contact email address"]
    },
    phone : {
        type:String,
        required : [true, "Please add the contact phone number"]
    },
    message : {
        type : String,
        required : [true, "Please Enter Your Message"]
    }
},
{
    timestamps : true,
}) 

module.exports = mongoose.model("contactus", contactUsSchema)

