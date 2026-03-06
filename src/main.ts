import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:8080",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  Logger.log("Mongo DB Connected");
  Logger.log(`Server is now Live! at - http://localhost:${port}`);
  
}
bootstrap();
