import {Body, Controller, Get, Param, Post, Put, Session} from "@nestjs/common";
import {ShoppingCartService} from "../../domain/shopping-cart.service";
import {ProductService} from "../../domain/product.service";
import {Product} from "../product/product";
import {ShoppingCartProduct} from "./shopping-cart-product";
import {ShoppingCartProductUpdate} from "./shopping-cart-product-update";
import {ShoppingCart} from "./shopping-cart";

@Controller('shopping-cart')
export class ShoppingCartController {


    constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService) {
    }

    @Post('/add/:id')
    public async addItem(@Param('id') id: number, @Session() session: Record<string, any>): Promise<void> {
        const product: Product = this.productService.products.find((item) => {
            return item.id == id;
        })

        let shoppingCart: ShoppingCart = this.shoppingCartService.shoppingCart.find((item) => {
            return item.sessionId == session.id;
        });

        console.log(shoppingCart);

        if (!shoppingCart) {
            console.log('tests');
            shoppingCart = {
                products: [],
                sessionId: session.id
            }
            this.shoppingCartService.shoppingCart.push(shoppingCart);
            shoppingCart.products.push({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                discount: product.discount,
                image: product.image,
                amount: 1
            })
        } else {
            const shoppingCartProduct: ShoppingCartProduct = shoppingCart.products.find((item) => {
                return item.id == id;
            });

            console.log(product);

            if (shoppingCartProduct) {
                shoppingCartProduct.amount++;
            }

            if (!shoppingCartProduct) {
                shoppingCart.products.push({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    discount: product.discount,
                    image: product.image,
                    amount: 1
                })
            }
        }
        console.log(this.shoppingCartService.shoppingCart);
    }

    @Put('/product/amount/update')
    public updateAmountOfProduct(@Body() body: ShoppingCartProductUpdate, @Session() session: Record<string, any>): void {
        const shoppingCart = this.shoppingCartService.shoppingCart.find((item) => {
            return item.sessionId == session.id;
        });

        const product = shoppingCart.products.find((item) => {
            return item.id == body.id;
        });

        if (product) {
            product.amount = body.amount;
        }

        console.log(this.shoppingCartService.shoppingCart);
    }

    @Get('/products')
    public getShoppingCartProducts(@Session() session: Record<string, any>): ShoppingCartProduct[] {
        let shoppingCart: ShoppingCart = this.shoppingCartService.shoppingCart.find((item) => {
            return item.sessionId == session.id;
        });

        if (!shoppingCart) {
            shoppingCart = {
                sessionId: session.id,
                products: []
            }
            this.shoppingCartService.shoppingCart.push(shoppingCart);
        }

        return shoppingCart.products;
    }


}
