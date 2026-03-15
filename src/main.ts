import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "https://industry-portfolio-jet.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })

  // global prefix
  app.setGlobalPrefix('portfolio');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  Logger.log("Mongo DB Connected");
  Logger.log(`Server is now Live! at - https://industryportfolio-backend.onrender.com:${port}`);
  
}
bootstrap();
