import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService) { }

  async ngOnInit(): Promise<void> {
    await this.shoppingCartService.getShoppingCart();
  }

}
