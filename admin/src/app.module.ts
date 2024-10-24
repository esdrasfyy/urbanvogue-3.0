import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { ConfigModule } from '@nestjs/config';
import { Database, getModelByName, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import provider from './admin/auth-provider.js';
import { componentLoader } from './admin/component-loader.js';
import { PrismaService } from './services/prisma.service.js';
AdminJS.registerAdapter({ Database, Resource });

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    AdminModule.createAdminAsync({
      useFactory: async () => {
        const prisma = new PrismaService();
        const models = Object.keys(prisma).filter((key) => typeof prisma[key] === 'object');

        const resources = models.map((model) => ({
          resource: { model: prisma[model], client: prisma },
          options: {}, // Aqui você pode adicionar opções personalizadas para cada recurso
        }));
        return {
          adminJsOptions: {
            componentLoader,
            rootPath: '/admin',
            resources: [
              { resource: { model: getModelByName('User'), client: prisma }, options: {} },
              { resource: { model: getModelByName('PasswordReset'), client: prisma }, options: {} },
              { resource: { model: getModelByName('Brand'), client: prisma }, options: {} },
              { resource: { model: getModelByName('Category'), client: prisma }, options: {} },
              { resource: { model: getModelByName('Store'), client: prisma }, options: {} },
              { resource: { model: getModelByName('Product'), client: prisma }, options: {} },
              { resource: { model: getModelByName('ProductColor'), client: prisma }, options: {} },
              { resource: { model: getModelByName('ProductSize'), client: prisma }, options: {} },
              { resource: { model: getModelByName('ProductImage'), client: prisma }, options: {} },
              { resource: { model: getModelByName('ProductDetail'), client: prisma }, options: {} },
              { resource: { model: getModelByName('ProductFlag'), client: prisma }, options: {} },
            ],
            databases: [],
          },
          auth: {
            provider,
            cookiePassword: process.env.COOKIE_SECRET,
            cookieName: 'adminjs',
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: process.env.COOKIE_SECRET,
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
