import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, public productService: ProductService, private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit(): Promise<void> {
    await this.productService.getAllProducts();
    await this.shoppingCartService.getShoppingCart();
  }

}
