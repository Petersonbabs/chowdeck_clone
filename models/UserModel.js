const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : [true, "Email already exist"]
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["customer", "vendor", "admin"],
        required : true
    },
    phoneNo : {
        type : Number,
        required : true
    },
    createdAt : {
        type : String,

    },


})
const userModel = mongoose.model("user", userSchema)
module.exports = userModel