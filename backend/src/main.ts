import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {WebshopLogger} from "./security/logger/service/logger.service";
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new WebshopLogger()

  });

  app.enableCors({
    origin: ["http://localhost:4200", "http://localhost:4201"],
    credentials: true
  });
  app.use(
      session({
        secret: 'ThisShouldBeAVerySecretiveSecretButItIsnt',
        resave: false,
        saveUninitialized: false,
      }),
  );

  await app.listen(3000);
}


bootstrap();
