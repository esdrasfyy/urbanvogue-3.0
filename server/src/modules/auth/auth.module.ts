import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthRepository } from "../../repository";
import { MailerService } from "../../services/mailer.sevice";
import { PrismaService } from "../../services/prisma.service";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, MailerService, PrismaService],
})
export class AuthModule {}
