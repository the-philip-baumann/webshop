import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OverviewComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
