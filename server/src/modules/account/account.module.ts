import { Module } from "@nestjs/common";
import { MailerService } from "src/services/mailer.sevice";
import { PrismaService } from "src/services/prisma.service";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";
import { AccountRepository } from "src/repository";

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository, MailerService, PrismaService],
})
export class AccountModule {}
