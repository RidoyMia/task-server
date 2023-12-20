import express from "express"
import { TaskController } from "./task.controller"
const taskRouter  = express.Router()
taskRouter.post('/create',TaskController.createTaskController)
taskRouter.get('/user/:email',TaskController.getAllTaskController)

export default taskRouter