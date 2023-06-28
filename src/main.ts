import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import * as process from "process"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3080
  app.enableCors({
    origin: "*",
    credentials: true
  })
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port);
}
bootstrap();
