const express=require("express")
const { getAllTask, createTask, deletetask, updateTask } = require("../controllers/task.controller")

const taskRouter=express.Router()

taskRouter.get("/",getAllTask)
taskRouter.post("/task",createTask)
taskRouter.delete("/task/:id",deletetask)
taskRouter.put("/task/:id",updateTask)


module.exports=taskRouter
