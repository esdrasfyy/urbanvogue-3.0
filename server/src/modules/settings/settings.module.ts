import { Module } from "@nestjs/common";
import { SettingsController } from "./settings.controller";
import { SettingsService } from "./settings.service";
import { SettingsRepository } from "../../repository";
import { MailerService } from "../../services/mailer.sevice";
import { PrismaService } from "../../services/prisma.service";

@Module({
  imports: [],
  controllers: [SettingsController],
  providers: [SettingsService, SettingsRepository, MailerService, PrismaService],
})
export class SettingsModule {}
