const express = require("express")
const authRouter = express.Router()
const {signup, login, verifyEmail} = require("../controllers/authController")


module.exports = authRouter