import { Module } from "@nestjs/common";
import { MailerService } from "../../services/mailer.sevice";
import { PrismaService } from "../../services/prisma.service";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";
import { AccountRepository, CartRepository } from "../../repository";

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository, CartRepository, MailerService, PrismaService],
})
export class AccountModule {}
