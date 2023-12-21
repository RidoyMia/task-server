import express from "express"
import { TaskController } from "./task.controller"
const taskRouter  = express.Router()
taskRouter.post('/create',TaskController.createTaskController)
taskRouter.patch('/process/:id',TaskController.updateProcess)
taskRouter.patch('/totalTask/:id',TaskController.updatedTaskController)
taskRouter.get('/user/:email',TaskController.getAllTaskController)
taskRouter.delete('/delete/:id',TaskController.deletedOneTaskController)

export default taskRouter