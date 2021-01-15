import {Module} from "@nestjs/common";
import {ProductController} from "./product/product.controller";
import {ShoppingCartController} from "./shopping-cart/shopping-cart.controller";
import {DomainModule} from "../domain/domain.module";
import {CheckoutController} from "./checkout/checkout.controller";

@Module({
    imports: [DomainModule],
    controllers: [ProductController, ShoppingCartController, CheckoutController],
    providers: []
})
export class ControllerModule {

}
