import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  async navigateToDetailPage(): Promise<void> {
    await this.router.navigate(['/product-detail', this.product.id]);
  }

}
