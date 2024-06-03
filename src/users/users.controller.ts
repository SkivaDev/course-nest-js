import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Get('/')
    getAllUsers(): any[] {
        return this.usersService.getUsers();
    }

    @Post('/')
    createUser(@Body() user: any): any {
        return this.usersService.createUser(user);
    }
}
