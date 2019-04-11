import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { Product } from 'src/app/class/product';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${environment.token}`
  })
};

@Injectable({
  providedIn: 'root'
})



export class ProductService {
  private readonly URL_API = `${environment.url_api}`;

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product>(`${this.URL_API}/products`, httpOptions)
  }

  exchange(idProduct: string){
    var data = {
      productId : idProduct
    }
    return this.http.post<any>(`${this.URL_API}/redeem`, data, httpOptions)
  }

  
  
}
