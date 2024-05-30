import { Injectable, NotFoundException } from "@nestjs/common";
import { createTaskDto } from "./dto/task.dto";

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
    }, {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        done: false
    }, {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        done: false
    }];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: number): any {
        const task = this.tasks.find(task => task.id === id);

        if (!task) {
            return new NotFoundException(`Task with ID ${id} not found`);
        }

        return task;
    }

    createTask(task: createTaskDto): Task {
        const newTask = {
            id: this.tasks.length + 1,
            done: false, 
            ...task
        };
        this.tasks.push(newTask);
        return newTask;
    }
}