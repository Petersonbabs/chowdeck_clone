const express = require("express")
const authRouter = express.Router()
const {login, verifyEmail, signup} = require("../controllers/authController")

authRouter.post("/signup", signup)
authRouter.post("/signin", signin)
authRouter.post("/verify/:token", verifyEmail)

module.exports = authRouter