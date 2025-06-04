const bcrypt = require("bcryptjs");
const userModel = require("../models/UserModel");

const signup = (req,res,next)=>{
    const {password} = req.body;
    try {
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);
        const user = userModel.create({...req.body,password: hashedPassword});
        if (!user) {
            return res.status(400).json({
                message: "user not successfully signedup",
                status: "error"
            })
        }
        res.status(200).json({
            message: "signup succcessful",
            status: "success"
        })
        
    } catch (err) {
        console.log(err);
        next(err);
    }
}
module.exports = {
    signup
}const bcrypt = require("bcryptjs");

const signup = (req,res,next)=>{
    const {password} = req.body;
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);
    try {
        const user = user
    } catch (err) {
        console.log(err);
        next(err);
    }
}