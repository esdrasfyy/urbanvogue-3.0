import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountRepository } from 'src/repository';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, AccountRepository],
})
export class AuthModule {}
