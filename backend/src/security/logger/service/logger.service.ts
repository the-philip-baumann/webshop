import {Injectable, Logger, LoggerService, Scope} from "@nestjs/common";

@Injectable({ scope: Scope.TRANSIENT })
export class WebshopLogger extends Logger implements LoggerService{
    log(message: any, context?: string): any {
        super.log(message, context);
    }

    warn(message: any, context?: string): any {
        super.warn(message, context);
    }

    error(message: any, trace?: string, context?: string): any {
        super.error(message, trace, context);
    }

    debug(message: string, context?: string): any {
        super.debug(message, context);
    }
    verbose(message: string, context?: string): any {
        super.verbose(message, context);
    }
}
