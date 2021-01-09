import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../services/product";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {ShoppingCartService} from "../services/shopping-cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private router: Router, private http: HttpClient, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  async navigateToDetailPage(): Promise<void> {
    await this.router.navigate(['/product-detail', this.product.id]);
  }

  async addProductToShoppingCart() {
    await this.shoppingCartService.saveProductInShoppingCart(this.product);
  }

}
