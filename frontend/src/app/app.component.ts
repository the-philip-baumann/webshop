import { Component } from '@angular/core';
import {ShoppingCartService} from "./services/shopping-cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(public shoppingCartService: ShoppingCartService) {

  }
}
