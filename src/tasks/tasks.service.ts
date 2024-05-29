import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
    getTasks(): string[] {
        return ['Task 1', 'Task 2', 'Task 3'];
    }
}