const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")
const dbConnect = require("./config/dbConnect")
const taskRouter = require("./routes/task.route")
dotenv.config()

const app=express()
const port=process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use("/api",taskRouter)

app.get("/",(req,res)=>{
    res.send(`<h1>Task Manager</h1>`)
})

app.listen(port,()=>{
    console.log(`Server Started .... ${port}`)
    dbConnect()
})