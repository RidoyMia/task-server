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
        const result = yield task_service_1.taskServices.createTask(taskData);
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
        const email = req.params.email;
        const result = yield task_service_1.taskServices.getAllTask(email);
        res.status(200).send({
            data: true,
            result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.TaskController = {
    createTaskController, getAllTaskController
};
