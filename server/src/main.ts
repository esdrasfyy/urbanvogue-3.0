import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { AppModule } from "./app.module";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle("Ecommerce API")
    .setDescription("API documentation for the Ecommerce Whitelabel platform, providing endpoints for managing products, orders, and user accounts.")
    .setVersion("0.0.1")
    .addTag("Account", "Endpoints for user management")
    .addTag("Auth", "Endpoints for user authentication")
    .addTag("Cart", "Endpoints related to cart management, including adding and retrieving items.")
    .addTag("Default", "General application endpoints, such as health checks and welcome messages.")
    .addTag("Orders", "Endpoints for processing orders and payments")
    .addTag("Products", "Endpoints for managing product information")
    .addTag("Settings", "Operations related to the Whitelabel ecommerce functionality")
    .setContact("Creator", "contatoesdrasoficial@gmail.com", "https://esdras.dev")
    .setLicense("MIT", "https://opensource.org/licenses/MIT")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.use(cookieParser());
  app.use(cors({ origin: ["http://localhost:3000", "3.142.252.95", "http://3.142.252.95", "http://3.142.252.95:3000", "https://www.urbanvogue.cloud", "https://urbanvogue.cloud"], credentials: true }));

  await app.listen(process.env.PORT ?? 9000);
}
bootstrap();
