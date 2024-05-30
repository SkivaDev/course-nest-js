import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {

    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get('')
    getAllTasks(@Query() query: any): Task[] {
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Post('')
    createTask(@Body() task: Task): Task {
        return this.tasksService.createTask(task);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): any {
        return this.tasksService.getTaskById(parseInt(id));
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
