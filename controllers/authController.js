const bcrypt = require("bcryptjs");
const userModel = require("../models/UserModel");

const signup = (req,res,next)=>{
    const {password, name, email} = req.body;
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
        const userFirstName = name.split(" ")[0]
    } catch (err) {
        console.log(err);
        next(err);
    }
}