import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { Product } from 'src/app/class/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2FiYmM4ZWEwZDM1ZjAwODI2MjBmZTkiLCJpYXQiOjE1NTQ3NTg3OTl9.ktA8LPxdj1O1dYucVrsJTGHkiiuDdtaczHfIMfjU5Bg'
  })
};

@Injectable({
  providedIn: 'root'
})



export class ProductService {
  private URL_API = 'https://aerolab-challenge.now.sh';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product>(`${this.URL_API}/products`, httpOptions)
  }
  
}
