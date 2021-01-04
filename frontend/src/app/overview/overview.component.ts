import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  products: Product[];


  constructor(private router: Router, private http: HttpClient) {
  }



  async ngOnInit(): Promise<void> {
    this.products = await this.http.get<Product[]>(environment.host + 'product/all').toPromise();
  }

  async navigateToShoppingCart(): Promise<void> {
    await this.router.navigate(['/shopping-cart'])
  }

}
