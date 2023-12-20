import express,{Request,Response,NextFunction} from "express"
import { Itask } from "./task.interface"
import { taskServices } from "./task.service";


const createTaskController= async(req:Request,res:Response,next:NextFunction) : Promise<Itask | any> =>{
    try {
        const taskData = req.body;
        const result = await taskServices.createTask(taskData);
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

const getAllTaskController= async(req:Request,res:Response,next:NextFunction) : Promise<Itask | any> =>{
    try {
        const email = req.params.email;
        const result = await taskServices.getAllTask(email);
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}

export const TaskController = {
    createTaskController,getAllTaskController
}