import { Module } from '@nestjs/common';
import {WebshopLogger} from "./service/logger.service";

@Module({
    providers: [WebshopLogger],
    exports: [WebshopLogger],
})
export class LoggerModule {}
