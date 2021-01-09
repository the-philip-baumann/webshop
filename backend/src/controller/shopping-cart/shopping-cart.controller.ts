import {Body, Controller, Get, Param, Post, Put} from "@nestjs/common";
import {ShoppingCartService} from "../../domain/shopping-cart.service";
import {ProductService} from "../../domain/product.service";
import {Product} from "../product/product";
import {ShoppingCartProduct} from "./shopping-cart-product";
import {ShoppingCartProductUpdate} from "./shopping-cart-product-update";

@Controller('shopping-cart')
export class ShoppingCartController {



    constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService) {
    }

    @Post('/add/:id')
    public async addItem(@Param('id') id: number): Promise<void> {
        const product: Product = this.productService.products.find((item) => {
            console.log(item.id, '==', id);
            return item.id == id;
        })

        const shoppingCartProduct: ShoppingCartProduct = this.shoppingCartService.shoppingCart.find((item) => {
           return item.id == id;
        });

        if (shoppingCartProduct) {
            shoppingCartProduct.amount++;
        }

        if (!shoppingCartProduct) {
            this.shoppingCartService.shoppingCart.push({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                discount: product.discount,
                image: product.image,
                amount: 1
            })
        }
        console.log(this.shoppingCartService.shoppingCart);
    }

    @Put('/product/amount/update')
    public updateAmountOfProduct(@Body() body: ShoppingCartProductUpdate): void {
        const product = this.shoppingCartService.shoppingCart.find((item) => {
            return item.id == body.id;
        });

        if (product) {
            product.amount = body.amount;
        }

        console.log(this.shoppingCartService.shoppingCart);
    }

    @Get('/products')
    public getShoppingCartProducts(): ShoppingCartProduct[] {
        console.log(this.shoppingCartService.shoppingCart);
        return this.shoppingCartService.shoppingCart;
    }


}
