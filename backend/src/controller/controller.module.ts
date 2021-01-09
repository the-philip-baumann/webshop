import {Module} from "@nestjs/common";
import {ProductController} from "./product/product.controller";
import {ShoppingCartController} from "./shopping-cart/shopping-cart.controller";
import {DomainModule} from "../domain/domain.module";

@Module({
    imports: [DomainModule],
    controllers: [ProductController, ShoppingCartController],
    providers: []
})
export class ControllerModule {

}
