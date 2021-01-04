import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {WebshopLogger} from "./security/logger/service/logger.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new WebshopLogger()
  });

  app.enableCors({
    origin: "*",
  });

  await app.listen(3000);
}


bootstrap();
