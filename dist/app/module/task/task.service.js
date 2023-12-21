"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskServices = void 0;
const task_model_1 = require("./task.model");
const createTask = (taskData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.taskModel.create(taskData);
    return result;
});
const getAllTask = (email, task) => __awaiter(void 0, void 0, void 0, function* () {
    if (task) {
        const result = yield task_model_1.taskModel.find({ author: email, process: task ? task : '' });
        return result;
    }
    const result = yield task_model_1.taskModel.find({ author: email });
    return result;
});
const updateProcessService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const findData = yield task_model_1.taskModel.find({ _id: id });
    console.log(findData, 'finding');
    if (findData[0].process == 'to-do') {
        console.log('to-do');
        const result = yield task_model_1.taskModel.updateOne({ _id: id }, { $set: {
                process: 'ongoing'
            } });
        return result;
    }
    else if (findData[0].process == 'ongoing') {
        const result = yield task_model_1.taskModel.updateOne({ _id: id }, { $set: {
                process: 'completed'
            } });
        return result;
    }
    else {
        return;
    }
});
const updateTaskService = (taskData, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.taskModel.updateOne({ _id: id }, { $set: {
            title: taskData.title,
            author: taskData.author,
            descriptions: taskData.descriptions,
            deadlines: taskData.deadlines,
            priority: taskData.priority,
            process: taskData.process
        } });
    return result;
});
const deletedOneTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.taskModel.deleteOne({ _id: id });
    return result;
});
exports.taskServices = {
    createTask, getAllTask, updateProcessService, updateTaskService, deletedOneTask
};
