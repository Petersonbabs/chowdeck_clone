const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/UserModel");

const signIn = async (req, res)=>{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(403).json({
                status:"error",
                message:"Email or Password incorrect"
            })
        }
        const verifyPass = bcrypt.compare(password, user.password);
        if (!verifyPass) {
            return res.status(403).json({
                status:"error",
                message:"Email or Password incorrect"
            })
        }
        const accessToken = jwt.sign({id:user._id, email:user.email}, process.env.jwt_secret, {expiresIn:process.env.jwt_expires_in});
        res.status(200).json({
            status:'success',
            message:'Sign in successfully',
            accessToken
        })
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    signIn
};