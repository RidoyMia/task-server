import express,{Request,Response,NextFunction} from "express"
import { Itask } from "./task.interface"
import { taskServices } from "./task.service";


const createTaskController= async(req:Request,res:Response,next:NextFunction) : Promise<Itask | any> =>{
    try {
        const taskData = req.body;
       console.log(taskData,'added data');
        const result = await taskServices.createTask(taskData);
        console.log(result,'result');
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
        //@ts-ignore
        const task:string =req.query.task;
        
        const email = req.params.email;
        console.log(req.body,'body')
        
        const result = await taskServices.getAllTask(email,task || '');
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}
const updateProcess = async(req:Request,res:Response,next:NextFunction) : Promise<Itask | any> =>{
    try {
        const id = req.params.id;
        const result = await taskServices.updateProcessService(id);
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        next(error)
    }
}
const updatedTaskController = async(req:Request,res:Response,next:NextFunction) : Promise<Itask | any> =>{
    try {
        const id:string = req.params.id;
        const updatedData : Itask = req.body;
        console.log(updatedData,'updatedData now');
        const result = await taskServices.updateTaskService(updatedData,id);
        res.status(200).send({
            data : true,
            result
        })

    } catch (error) {
        next(error)
    }
}
const deletedOneTaskController = async(req:Request,res:Response,next:NextFunction) : Promise<Itask | any> =>{
    try {
        const id = req.params.id;
        const result = await taskServices.deletedOneTask(id);
        res.status(200).send({data : true,result})
    } catch (error) {
        next(error)
    }
}

export const TaskController = {
    createTaskController,getAllTaskController,updateProcess,updatedTaskController,deletedOneTaskController
}