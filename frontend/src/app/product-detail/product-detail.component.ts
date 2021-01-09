import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../services/product";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductService} from "../services/product.service";
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private http: HttpClient, private productService: ProductService, private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params.id;
    this.product = await this.productService.getProductById(this.id);
  }

  async addProduct() {
    await this.shoppingCartService.saveProductInShoppingCart(this.product);
  }
}
