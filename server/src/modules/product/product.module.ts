import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductRepository } from "../../repository";
import { MailerService } from "../../services/mailer.sevice";
import { PrismaService } from "../../services/prisma.service";

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, MailerService, PrismaService],
})
export class ProductModule {}
