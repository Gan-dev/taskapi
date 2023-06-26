import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.FRONT_END_URL)
  console.log(process.env.PORT)
  app.enableCors({
    origin: "*",
    credentials: true
  })
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT);
}
bootstrap();
