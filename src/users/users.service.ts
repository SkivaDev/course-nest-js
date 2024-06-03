import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  getUsers(): any {
    return this.prisma.user.findMany();
  }

  createUser(user: any): any {
    return this.prisma.user.create({ data: user});
  }
}
