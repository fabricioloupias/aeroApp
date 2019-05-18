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
  products: any
  

  constructor(private http: HttpClient) { 
    
  }

  getProducts(){
    this.products = this.http.get<Product>(`${this.URL_API}/products`, httpOptions)
    return this.products
  }

  exchange(idProduct: string){
    var data = {
      productId : idProduct
    }
    return this.http.post<any>(`${this.URL_API}/redeem`, data, httpOptions)
  }

  sortHighToLow(products: any) {
    return products.sort((a, b) => {
      return b.cost - a.cost
    })
  }

  sortLowToHigh(products: any) {
    return products.sort((a, b) => {
      return a.cost - b.cost
    })
  }
  
  
}
