import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule implements NestModule{
  configure(consumer: import("@nestjs/common").MiddlewareConsumer) {
    // consumer
    // .apply(LoggerMiddleware)
    // // .forRoutes('users'); // Aplica el middleware a todas "/users" las rutas de la aplicación
    // .forRoutes( // Aplica el middleware a las rutas especificadas "/users"
    //   {path: '/users', method: RequestMethod.GET},
    //   {path: '/users', method: RequestMethod.POST}
    // )
    // .apply(AuthMiddleware) // Aplica el middleware a todas las rutas de la aplicación
    // .forRoutes('/users');
  }
}
