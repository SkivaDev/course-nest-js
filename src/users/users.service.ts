import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'jhon@gmial.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@gmail.com',
    },
  ];
  getUsers(): any[] {
    return this.users;
  }
}
