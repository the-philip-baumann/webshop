import { Injectable } from '@angular/core';
import {ShoppingCartProduct} from "./shopping-cart-product";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  price: number = 0;
  shoppingCart: ShoppingCartProduct[];

  constructor(private http: HttpClient) {

  }

  async getShoppingCart() {
    this.shoppingCart = await this.http.get<ShoppingCartProduct[]>(environment.host + 'shopping-cart/products').toPromise();
  }

  public async saveProductInShoppingCart(product: Product): Promise<void> {
    await this.http.post(environment.host + 'shopping-cart/add/' + product.id, {}).toPromise();
    await this.getShoppingCart();
    this.updatePricing();
  }

  async updateProduct(id, amount): Promise<void> {
    await this.http.put(environment.host + 'shopping-cart/product/amount/update', {
      id,
      amount
    }).toPromise();
    await this.getShoppingCart();
    this.updatePricing();
  }

  public updatePricing() {
    this.price = 0;
    for (let product of this.shoppingCart) {
      this.price += product.price * product.amount;
    }
  }
}
