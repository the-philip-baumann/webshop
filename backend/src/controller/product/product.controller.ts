import {Controller, Get} from "@nestjs/common";
import {Product} from "./product";

@Controller('product')
export class ProductController {

    @Get('/all')
    public getAllProducts(): Product[] {
        return this.products;
    }

    products: Product[] = [
        {
            id: 1,
            name: 'apple',
            description: 'red apple',
            price: 1.00,
            discount: 10,
        },
        {
            id: 2,
            name: 'apple',
            description: 'green apple',
            price: 1.00,
            discount: 10,
        },
        {
            id: 3,
            name: 'apple',
            description: 'yellow apple',
            price: 1.00,
            discount: 10,
        },
        {
            id: 4,
            name: 'apple',
            description: 'yellow apple',
            price: 1.00,
            discount: 10,
        },
        {
            id: 5,
            name: 'apple',
            description: 'yellow apple',
            price: 1.00,
            discount: 10,
        },
        {
            id: 6,
            name: 'apple',
            description: 'yellow apple',
            price: 1.00,
            discount: 10,
        }
    ];
}
