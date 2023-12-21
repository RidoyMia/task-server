"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("./task.controller");
const taskRouter = express_1.default.Router();
taskRouter.post('/create', task_controller_1.TaskController.createTaskController);
taskRouter.get('/user/:email', task_controller_1.TaskController.getAllTaskController);
exports.default = taskRouter;
