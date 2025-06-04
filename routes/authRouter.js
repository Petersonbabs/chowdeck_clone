const express = require("express")
const authRouter = express.Router()
const { signIn } = require("../controllers/auth")

authRouter.post("/signin", signIn)


module.exports = authRouter