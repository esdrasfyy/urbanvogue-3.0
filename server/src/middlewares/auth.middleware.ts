import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // const token = req.headers['authorization'];

    // if (!token) {
    //   throw new UnauthorizedException('Você precisa estar logado para acessar essa rota.');
    // }

    // if (token !== 'seu-token-valido-aqui') {
    //   throw new UnauthorizedException('Token inválido ou sessão expirada.');
    // }
    console.log('passou no middleware de auth');
    
    next(); // Continua para o próximo middleware ou controlador
  }
}
