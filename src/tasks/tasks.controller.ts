import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

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
    @UsePipes()
    createTask(@Body() task: createTaskDto): Task {
        return this.tasksService.createTask(task);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): any {
        return this.tasksService.getTaskById(parseInt(id));
    }

    @Patch('/:id')
    updateTask(@Param('id') id: string, @Body() task: updateTaskDto): any {
        return this.tasksService.updateTask(parseInt(id), task);
    }

    @Delete('/:id')
    deleteTask(): string {
        return 'Deleting a task';
    }
}
