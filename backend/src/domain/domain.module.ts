import {Module} from "@nestjs/common";
import {ShoppingCartService} from "./shopping-cart.service";
import {ProductService} from "./product.service";

const services = [ShoppingCartService, ProductService];

@Module({
    imports: [],
    providers: [...services],
    exports: [...services]
})
export class DomainModule {
}
