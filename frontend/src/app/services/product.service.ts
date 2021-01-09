import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[];

  constructor(private http: HttpClient) {
  }

  async getAllProducts() {
    this.products = await this.http.get<Product[]>(environment.host + 'product/all').toPromise();
  }

  async getProductById(id: number) {
    return await this.http.get<Product>(environment.host + 'product/' + id).toPromise();
  }
}
