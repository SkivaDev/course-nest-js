import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

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
}
