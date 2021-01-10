import {Body, Controller, Get, Param, Session} from "@nestjs/common";
import {Product} from "./product";
import {ProductService} from "../../domain/product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {
    }

    @Get('/all')
    public getAllProducts(@Session() session: Record<string, any>): Product[] {

        if (session.visits) {
            session.visits++;
            console.log('User visited site ' + session.visits + ' times');
        } else {
            session.visits = 1;
            console.log('User visited site for the first time');
        }

        console.log(session);
        console.log(session.id);

        return this.productService.products;
    }

    @Get('/:id')
    public getProductById(@Param('id') id: number): Product {
        console.log(id);
        return this.productService.products.find((product) => {
            return product.id == id;
        })
    }
}
