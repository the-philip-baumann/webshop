import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.product = {id: 1, description: 'test', name: 'testName', discount: 10, price: 100};
  }

}
