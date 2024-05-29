import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get('/tasks')
    getAllTasks(): string {
        return 'All tasks';
    }
}
