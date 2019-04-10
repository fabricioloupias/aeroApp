import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { User } from 'src/app/class/user';
import { Observable } from 'rxjs';
import { Product } from 'src/app/class/product';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2FiYmM4ZWEwZDM1ZjAwODI2MjBmZTkiLCJpYXQiOjE1NTQ3NTg3OTl9.ktA8LPxdj1O1dYucVrsJTGHkiiuDdtaczHfIMfjU5Bg'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_API = 'https://aerolab-challenge.now.sh';
  

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    return this.http.get<User>(`${this.URL_API}/user/me`, httpOptions)
  }

  addPoints(points: number): Observable<any>{
  var point = {
    amount : points
  }
    return this.http.post(`${this.URL_API}/user/points`,point, httpOptions)
  }

  getHistory(){
    return this.http.get<Product>(`${this.URL_API}/user/history`, httpOptions)
  }

}
