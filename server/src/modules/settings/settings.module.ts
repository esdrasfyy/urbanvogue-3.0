import { Module } from "@nestjs/common";
import { SettingsController } from "./settings.controller";
import { SettingsService } from "./settings.service";
import { SettingsRepository } from "src/repository";
import { MailerService } from "src/services/mailer.sevice";
import { PrismaService } from "src/services/prisma.service";

@Module({
  imports: [],
  controllers: [SettingsController],
  providers: [SettingsService, SettingsRepository, MailerService, PrismaService],
})
export class SettingsModule {}
