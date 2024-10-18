import { Controller, Get, Post, Body, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public.decorator';
import { Response as ExpressResponse, Request as ExpressRequest } from 'express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginSwagger, RegisterSwagger } from 'src/docs/auth.doc';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @ApiOperation({
    summary: 'create user and returns decrypted user data via cookies.',
  })
  @ApiResponse({
    status: 201,
    description: 'user created and logged.',
    type: LoginSwagger,
  })
  @ApiResponse({ status: 409, description: 'data already exists' })
  @ApiResponse({ status: 400, description: 'incorrect field.' })
  @ApiBody({ type: RegisterSwagger })
  async register(@Res() res: ExpressResponse, @Body() dto: Account.Register) {
    await this.authService.register(dto, res);
  }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'returns decrypted user data via cookies.' })
  @ApiResponse({ status: 200, description: 'user logged.', type: LoginSwagger })
  @ApiResponse({ status: 404, description: 'not found user.' })
  @ApiResponse({ status: 401, description: 'incorrect password.' })
  @ApiResponse({ status: 400, description: 'incorrect field.' })
  @ApiBody({ type: LoginSwagger })
  async login(@Res() res: ExpressResponse, @Body() dto: Account.Login) {
    await this.authService.login(dto, res);
  }

  @Public()
  @Get('me')
  @ApiOperation({ summary: 'capture user session and return via body' })
  @ApiResponse({ status: 200, description: 'data captured and returned.', type: LoginSwagger })
  @ApiResponse({ status: 400, description: 'logged out user.' })
  async getMe(@Res() res: ExpressResponse, @Req() req: ExpressRequest) {
    await this.authService.authenticate(res, req);
  }
}
