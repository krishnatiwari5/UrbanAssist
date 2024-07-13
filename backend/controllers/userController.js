const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const registerUser = asyncHandler(async (req, res) => {
    const {userFirstName, userLastName, userEmail, userPassword} = req.body;
    if(!userFirstName || !userLastName || !userEmail || !userPassword) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({userEmail});
    if(userAvailable) {
        res.status(400);
        throw new Error("user already registered!")
    }
// let user = new User(req.body);
// let result = await user.save()
// console.log(result)

let user = new User(req.body)
let result = await user.save()
res.send(result)

// res.json({message : "Register the user"})

})


const loginUser = asyncHandler( async (req, res)=> {
    const {userEmail, userPassword} = req.body
    if(userEmail && userPassword) {
        let user = await User.findOne({userEmail}).select("-userPassword")
        if(user) {
            res.send(user)
        }
        else {
            res.send("No User Found")
        }
    } else {
        res.send("Please Enter Both fill Correctly")
    }
   
})


module.exports = {registerUser, loginUser}