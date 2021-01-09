import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient, public shoppingCartService: ShoppingCartService) { }

  async ngOnInit(): Promise<void> {
    await this.shoppingCartService.getShoppingCart();
  }

  async addToAmount(product): Promise<void> {
    product.amount--;
    await this.shoppingCartService.updateProduct(product.id, product.amount);
  }

  async subtractFromAmount(product): Promise<void> {
    product.amount++;
    await this.shoppingCartService.updateProduct(product.id, product.amount);
  }
}
