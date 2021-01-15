import { Component } from '@angular/core';
import {ShoppingCartService} from "./services/shopping-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(public shoppingCartService: ShoppingCartService, public router: Router) {

  }
}
