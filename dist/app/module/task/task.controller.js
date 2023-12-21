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
exports.TaskController = void 0;
const task_service_1 = require("./task.service");
const createTaskController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskData = req.body;
        console.log(taskData, 'added data');
        const result = yield task_service_1.taskServices.createTask(taskData);
        console.log(result, 'result');
        res.status(200).send({
            data: true,
            result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllTaskController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const task = req.query.task;
        const email = req.params.email;
        console.log(req.body, 'body');
        const result = yield task_service_1.taskServices.getAllTask(email, task || '');
        res.status(200).send({
            data: true,
            result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateProcess = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield task_service_1.taskServices.updateProcessService(id);
        res.status(200).send({
            data: true,
            result
        });
    }
    catch (error) {
        next(error);
    }
});
const updatedTaskController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        console.log(updatedData, 'updatedData now');
        const result = yield task_service_1.taskServices.updateTaskService(updatedData, id);
        res.status(200).send({
            data: true,
            result
        });
    }
    catch (error) {
        next(error);
    }
});
const deletedOneTaskController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield task_service_1.taskServices.deletedOneTask(id);
        res.status(200).send({ data: true, result });
    }
    catch (error) {
        next(error);
    }
});
exports.TaskController = {
    createTaskController, getAllTaskController, updateProcess, updatedTaskController, deletedOneTaskController
};
