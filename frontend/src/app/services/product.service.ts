import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products;

  constructor(private http: HttpClient) {
  }

  async getAllProducts() {
    this.products = await this.http.get<any>(environment.host + 'product/all', {
        withCredentials: true
      }).toPromise();
    console.log(this.products);
  }

  async getProductById(id: number) {
    return await this.http.get<Product>(environment.host + 'product/' + id).toPromise();
  }
}
