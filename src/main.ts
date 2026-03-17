import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
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

  Logger.log("Mongo DB Connected");
  Logger.log(`Server is now Live! at - https://eorico.vercel.app`);
  
}
bootstrap();
