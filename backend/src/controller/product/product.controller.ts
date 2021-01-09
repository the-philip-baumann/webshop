import {Body, Controller, Get, Param} from "@nestjs/common";
import {Product} from "./product";
import {ProductService} from "../../domain/product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {
    }

    @Get('/all')
    public getAllProducts(): Product[] {
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
