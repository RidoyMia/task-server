"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const task_route_1 = __importDefault(require("./app/module/task/task.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/task', task_route_1.default);
app.get('/', (req, res) => {
    res.status(200).send({
        data: true,
        result: []
    });
});
app.use((error, req, res, next) => {
    const name = error.name;
    const message = error.message;
    res.status(400).send({
        message,
        name
    });
});
exports.default = app;
