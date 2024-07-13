
const asyncHandler = require("express-async-handler")
const ContactUs = require("../models/contactUsModel")


const registerContactUs = asyncHandler(async (req, res) => {
    const {name, email, phone, message} = req.body
    if(!name || !email || !phone || !message) {
        res.status(400)
        throw new Error("All fields are mandatory!")
    }

    let newContact = new ContactUs(req.body)
   let result = await newContact.save();
   res.send(result)

})

module.exports = registerContactUs