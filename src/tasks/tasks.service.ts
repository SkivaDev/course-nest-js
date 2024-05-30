import { Injectable } from "@nestjs/common";

export interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

@Injectable()
export class TasksService {
    getTasks(): Task[] {
        return [{
            id: 1,
            title: 'Task 1',
            description: 'Description 1',
            done: true
        }];
    }
}