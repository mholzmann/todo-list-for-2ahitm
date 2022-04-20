import express from "express";
import { StatusCodes } from "http-status-codes";
import { addTask, getAllTasks, getTaskById, Task } from "./task-repository";

export const taskRouter = express.Router();

taskRouter.get("/api/tasks", function(request, response) {
    const tasks: Task[] = getAllTasks();
    response.json(tasks);
});

taskRouter.get("/api/tasks/:id", function(request, response) {
    const id: number = Number(request.params.id);
    const task: Task | undefined = getTaskById(id);
    if (task === undefined) {
        response.sendStatus(StatusCodes.NOT_FOUND);
        return;
    }
    response.json(task);
});

taskRouter.post("/api/tasks", function(request, response) {
    const action: any = request.body.action;
    const done: any = request.body.done;
    if (typeof action !== "string" || action.trim().length === 0) {
        response.status(StatusCodes.BAD_REQUEST).send("action missing or not ok");
        return;
    }
    if (typeof done !== "boolean") {
        response.status(StatusCodes.BAD_REQUEST).send("done missing or not ok");
        return;
    }
    const task: Task = addTask(action, done);
    response.status(StatusCodes.CREATED).json(task);
});