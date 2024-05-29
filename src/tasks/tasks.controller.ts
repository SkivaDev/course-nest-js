import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {

    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get('')
    getAllTasks(): string[] {
        return this.tasksService.getTasks();
    }

    @Post('')
    createTask(): string {
        return 'Creating a task';
    }

    @Get('/:id')
    getTaskById(): string {
        return 'Getting a task by ID';
    }

    @Patch('/:id')
    updateTask(): string {
        return 'Updating a task';
    }

    @Delete('/:id')
    deleteTask(): string {
        return 'Deleting a task';
    }
}
