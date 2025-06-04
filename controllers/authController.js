const bcrypt = require("bcryptjs");

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