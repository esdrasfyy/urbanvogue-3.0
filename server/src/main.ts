import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Ecommerce API")
    .setDescription("API documentation for the Ecommerce Whitelabel platform, providing endpoints for managing products, orders, and user accounts.")
    .setVersion("0.0.1")
    .addTag("Setttings", "Operations related to the Whitelabel ecommerce functionality")
    .addTag("Products", "Endpoints for managing product information")
    .addTag("Orders", "Endpoints for processing orders and payments")
    .addTag("Account", "Endpoints for user management")
    .addTag("Auth", "Endpoints for user authentication")
    .setContact("Creator", "contatoesdrasoficial@gmail.com", "https://esdras.dev")
    .setLicense("MIT", "https://opensource.org/licenses/MIT")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.use(cookieParser());
  app.use(
    cors({
      origin: (origin, callback) => {
        const allowedOrigins = ["http://localhost:3000"];
        const dynamicOrigins = /\.ngrok-free\.app$/;

        if (!origin || allowedOrigins.includes(origin) || dynamicOrigins.test(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    })
  );

  await app.listen(process.env.PORT ?? 9000);
}
bootstrap();
