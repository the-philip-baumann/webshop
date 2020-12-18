import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {WebshopLogger} from "./logger.service";

@Injectable()
export class ApiInterceptor implements NestInterceptor {

    constructor(private logger: WebshopLogger) {
    }

    async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
        this.logger.setContext(context.getClass().name);
        this.logger.debug('API Methode called: "' + context.getHandler().name + '"');
        return next.handle();
    }

}
