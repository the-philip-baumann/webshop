import {ShoppingCartProduct} from "./shopping-cart-product";

export interface ShoppingCart {
    products: ShoppingCartProduct[];
    sessionId: string;
}
