import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, public productService: ProductService) {
  }

  async ngOnInit(): Promise<void> {
    await this.productService.getAllProducts()
  }

  async navigateToShoppingCart(): Promise<void> {
    await this.router.navigate(['/shopping-cart'])
  }

}
