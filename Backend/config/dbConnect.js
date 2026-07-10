const mongoose=require("mongoose")

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected Successfully.")
    } catch (error) {
        console.log(error)
    }
}

module.exports=dbConnect