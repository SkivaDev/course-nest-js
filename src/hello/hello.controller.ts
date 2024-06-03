import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { get } from 'http';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('')
export class HelloController {
  @Get('/')
  getHello(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({ message: 'Hello World!' });
  }

  @Get('/notfound')
  @HttpCode(404)
  notFoundPage() {
    return { message: 'Page not found' };
  }

  @Get('/error')
  @HttpCode(500)
  errorPage() {
    return { message: 'Error route!!!' };
  }

  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 20;
  }

  @Get('/active/:status')
  @UseGuards(AuthGuard) // UseGuard sirve para proteger las rutas de los usuarios no autorizados
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return status ? 'User is active' : 'User is not active';
  }

  @Get('/redirect')
  @HttpCode(301)
  redirectPage(@Res() response: Response) {
    response.redirect('/notfound');
  }
}
