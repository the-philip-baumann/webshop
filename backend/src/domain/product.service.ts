import {Product} from "../controller/product/product";

export class ProductService {
    products: Product[] = [
        {
            id: 1,
            name: 'Apple',
            description: 'This is a very delicate apple from one of our local farmers.',
            price: 1.50,
            discount: 0,
            image: 'apple'
        },
        {
            id: 2,
            name: 'Pear',
            description: 'A very healthy fruit grown in southern spain and important within the last 48 hours.',
            price: 1.25,
            discount: 10,
            image: 'pear'
        },
        {
            id: 3,
            name: 'Grapes',
            description: 'Lovely self grown grapes. With beautiful colour and stunning taste.',
            price: 2.40,
            discount: 20,
            image: 'grapes'
        },
        {
            id: 4,
            name: 'Pineapple',
            description: 'Very healthy and perfect to make brewing your person health potion',
            price: 8.00,
            discount: 15,
            image: 'pineapple'
        },
        {
            id: 5,
            name: 'orange',
            description: 'Very healthy and especially good for your lungs',
            price: 1.80,
            discount: 50,
            image: 'orange'
        },
        {
            id: 6,
            name: 'Banana',
            description: 'Perfectl sizing and ideal for a lovely dessert',
            price: 1.80,
            discount: 30,
            image: 'banana'
        }
    ];
}
