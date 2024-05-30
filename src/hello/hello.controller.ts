import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { get } from 'http';

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
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return status ? 'User is active' : 'User is not active';
  }

  @Get('/redirect')
  @HttpCode(301)
  redirectPage(@Res() response: Response) {
    response.redirect('/notfound');
  }
}
