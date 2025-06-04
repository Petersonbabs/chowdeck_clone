const mongoose = require("mongoose")
const dotEnv = require("dotenv")
dotEnv.config()

const mongo_pass = process.env.mongodb_pass
const mongo_uri = process.env.mongodb_uri.replace("<password>", mongo_pass)

const connectToDb = async ()=>{
    try {
        const connected = await mongoose.connect(mongo_uri)
        if(connected){
            console.log("Mongod Connected")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb