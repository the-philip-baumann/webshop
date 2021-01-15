import {Body, Controller, Post, Session} from "@nestjs/common";
import {ShoppingCartService} from "../../domain/shopping-cart.service";
import {CheckoutDto} from "./checkout.dto";
import {ShoppingCart} from "../shopping-cart/shopping-cart";

@Controller('checkout')
export class CheckoutController {

    constructor(private shoppingCartService: ShoppingCartService) {
    }

    @Post('/')
    public checkout(@Session() session: Record<string, any>, @Body() body: CheckoutDto) {
        const shoppingCart: ShoppingCart = this.shoppingCartService.shoppingCart.find((item) => {
            console.log(item.sessionId, ' == ', session.id);
            return item.sessionId = session.id;
        });

        const index = this.shoppingCartService.shoppingCart.indexOf(shoppingCart, 0);
        this.shoppingCartService.shoppingCart.splice(index, 1);
    }

}