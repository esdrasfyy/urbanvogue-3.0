import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { CartRepository, ProductRepository } from "../../repository";
import { MailerService } from "../../services/mailer.sevice";
import { PrismaService } from "../../services/prisma.service";

@Module({
  imports: [],
  controllers: [CartController],
  providers: [CartService, ProductRepository, CartRepository, MailerService, PrismaService],
})
export class CartModule {}
