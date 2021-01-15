import {Injectable} from '@angular/core';
import {ShoppingCartProduct} from "./shopping-cart-product";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  price: number = 0;
  amountOfItems = 0;
  shoppingCart: ShoppingCartProduct[];

  constructor(private http: HttpClient) {

  }

  async getShoppingCart() {
    this.shoppingCart = await this.http.get<ShoppingCartProduct[]>(environment.host + 'shopping-cart/products', {
      withCredentials: true
    }).toPromise();
    this.updatePricing();
  }

  public async saveProductInShoppingCart(product: Product): Promise<void> {
    await this.http.post(environment.host + 'shopping-cart/add/' + product.id, {}, {
      withCredentials: true
    }).toPromise();
    await this.getShoppingCart();
  }

  async updateProduct(id, amount): Promise<void> {
    await this.http.put(environment.host + 'shopping-cart/product/amount/update', {
        id,
        amount
      },
      {
        withCredentials: true
      }).toPromise();
    await this.getShoppingCart();
  }

  public updatePricing() {
    this.price = 0;
    this.amountOfItems = 0;
    for (const product of this.shoppingCart) {
      this.price += product.amount * (product.price - (product.price / 100 * product.discount));
      this.amountOfItems += product.amount;
    }
  }

  async deleteProduct(id: number) {
    const shoppingCart: ShoppingCartProduct = this.shoppingCart.find((item) => {
      return item.id = id;
    });
    const index = this.shoppingCart.indexOf(shoppingCart);
    this.shoppingCart.slice(index, 1);
    await this.http.delete(environment.host + 'shopping-cart/delete/' + id, {
      withCredentials: true,
    }).toPromise();
    await this.getShoppingCart();
  }
}
