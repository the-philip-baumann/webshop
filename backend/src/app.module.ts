import { Module } from '@nestjs/common';
import {ControllerModule} from "./controller/controller.module";
import {LoggerModule} from "./security/logger/logger.module";

@Module({
  imports: [ControllerModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
