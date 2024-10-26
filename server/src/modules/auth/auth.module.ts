import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthRepository } from "src/repository";
import { MailerService } from "src/services/mailer.sevice";
import { PrismaService } from "src/services/prisma.service";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, MailerService, PrismaService],
})
export class AuthModule {}
