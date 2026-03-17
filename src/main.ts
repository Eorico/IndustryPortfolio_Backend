import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      "http://localhost:8080",
      "https://eorico.vercel.app"
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })

  // global prefix
  app.setGlobalPrefix('portfolio');

  const port = process.env.PORT ?? 3000;

  // Bind to 0.0.0.0 so Render can detect the port
  await app.listen(port, '0.0.0.0');

  const baseUrl =
  process.env.NODE_ENV === "production"
      ? "https://industryportfolio-backend.onrender.com"
      : `http://localhost:${port}`;

  Logger.log(`Server running on ${baseUrl}/portfolio`);
  
}
bootstrap();
