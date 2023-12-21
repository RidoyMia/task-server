import mongoose from "mongoose";
import { Itask } from "./task.interface";
import { taskModel } from "./task.model";

const createTask = async(taskData : Itask) : Promise<Itask | any> =>{
    const result = await taskModel.create(taskData);
    return result
}


const getAllTask = async(email : string,task : string) : Promise<Itask | any> =>{
  if(task){
    const result = await taskModel.find({author : email,process : task? task : ''});
    return result
  }
  const result = await taskModel.find({author : email});
  return result
  
}
const updateProcessService = async(id:string) : Promise<Itask | any> =>{
    const findData = await taskModel.find({_id : id})
    console.log(findData,'finding');
    if(findData[0].process =='to-do'){
      console.log('to-do');
      const result = await taskModel.updateOne({_id : id},{$set : {
        process : 'ongoing'
      }})
      return result
    }
    else if(findData[0].process =='ongoing'){
      const result = await taskModel.updateOne({_id : id},{$set : {
        process : 'completed'
      }})
      return result
    }
    else{
      return 
    }
}

const updateTaskService = async(taskData:Itask,id:string) : Promise<Itask | any> =>{
  const result = await taskModel.updateOne({_id : id},{$set : {
    title : taskData.title,
    author : taskData.author,
    descriptions : taskData.descriptions,
    deadlines : taskData.deadlines,
    priority : taskData.priority,
    process : taskData.process
  }})
  return result
}
const deletedOneTask = async(id:string) : Promise<Itask | any> =>{
  const result = await taskModel.deleteOne({_id : id});
  return result
}

export const taskServices = {
    createTask,getAllTask,updateProcessService,updateTaskService,deletedOneTask
}




















































