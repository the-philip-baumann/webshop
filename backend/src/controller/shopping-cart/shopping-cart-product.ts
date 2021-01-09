import {Product} from "../product/product";

export interface ShoppingCartProduct extends Product {
    amount: number;
}
