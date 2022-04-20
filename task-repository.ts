export interface Task {
    id: number;
    action: string;
    done: boolean;
}

let nextId: number = 1;

const tasks: Task[] = [
    {id: nextId++, action: "learn javascript", done:true},
    {id: nextId++, action: "learn typescript", done:false},
    {id: nextId++, action: "buy milk", done:false},
    {id: nextId++, action: "work out", done:true}
];

function findTaskIndex(id: number): number {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return i;
        }
    }
    return -1;
}

export function getAllTasks(): Task[] {
    return tasks;
}

export function getTaskById(id: number): Task | undefined {
    const index: number = findTaskIndex(id);
    if (index === -1) {
        return undefined;
    }
    return tasks[index];
}

export function addTask(action: string, done: boolean): Task {
    const task: Task = { id: nextId++, action, done };
    tasks.push(task);
    return task;
}