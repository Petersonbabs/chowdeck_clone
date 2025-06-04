const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const connectToDb = require("./config/connectToDb")
const app = express()

connectToDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan("dev")) 

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log("App is running")
})