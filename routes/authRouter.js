const express = require("express")
const authRouter = express.Router()
const { signup } = require("../controllers/authController")
const logoutController = require("../controllers/logout")
const { signIn } = require("../controllers/auth")



authRouter.post("/signup", signup)
authRouter.post("/signin", signIn)
authRouter.post("/logout", logoutController)

module.exports = authRouter