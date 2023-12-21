import mongoose, { Schema } from "mongoose";
import { Itask } from "./task.interface";

const taskSchema = new Schema<Itask>({
    title: {
        type: String,
        required: true,
        unique: false
    },
    descriptions: {
        type: String,
        required: true,
        unique: false
    },
    deadlines: {
        type: String,
        required: true,
        unique: false
    },
    priority: {
        type: String,
        required: true,
        enum: ['high', 'Low', 'moderate'],
         // Set the default value to 'High'
    },
    author : {
        type : String,
        required: true,
    },
    process: {
        type: String,
        required: true,
        enum: ['to-do', 'ongoing', 'completed']
    }
});

export const taskModel = mongoose.model('task',taskSchema)