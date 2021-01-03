import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'apple',
      description: 'red apple',
      price: 1.00,
      discount: 10,
    },
    {
      id: 2,
      name: 'apple',
      description: 'green apple',
      price: 1.00,
      discount: 10,
    },
    {
      id: 3,
      name: 'apple',
      description: 'yellow apple',
      price: 1.00,
      discount: 10,
    },
    {
      id: 3,
      name: 'apple',
      description: 'yellow apple',
      price: 1.00,
      discount: 10,
    },
    {
      id: 3,
      name: 'apple',
      description: 'yellow apple',
      price: 1.00,
      discount: 10,
    },
    {
      id: 3,
      name: 'apple',
      description: 'yellow apple',
      price: 1.00,
      discount: 10,
    }
  ];

  constructor(private router: Router) { }



  ngOnInit(): void {
  }

  async navigateToShoppingCart(): Promise<void> {
    await this.router.navigate(['/shopping-cart'])
  }

}
