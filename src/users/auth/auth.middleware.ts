import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const { authorization } = req.headers;

    if (!authorization) {
      // res.status(401).send('No autorizado');
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
    }

    if (authorization !== 'skivaPassword') {  
      // res.status(403).send('No permitido');
      throw new HttpException('No permitido', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
