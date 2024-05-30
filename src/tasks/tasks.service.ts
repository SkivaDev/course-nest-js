import { Injectable } from "@nestjs/common";

export interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

@Injectable()
export class TasksService {

    private tasks: Task[] = [{
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        done: true
    }];

    getTasks(): Task[] {
        return this.tasks;
    }

    createTask(task: Task): Task {
        const newTask = {
            id: this.tasks.length + 1,
            ...task
        };
        this.tasks.push(newTask);
        return newTask;
    }
}