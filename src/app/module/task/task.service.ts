import mongoose from "mongoose";
import { Itask } from "./task.interface";
import { taskModel } from "./task.model";

const createTask = async(taskData : Itask) : Promise<Itask | any> =>{
    const result = await taskModel.create(taskData);
    return result
}


const getAllTask = async(email : string) : Promise<Itask | any> =>{
  const result = await taskModel.find({author : email});
  return result
}

export const taskServices = {
    createTask,getAllTask
}




















































