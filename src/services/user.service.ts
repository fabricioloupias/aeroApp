import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { User } from 'src/app/class/user';
import { Observable } from 'rxjs';
import { Product } from 'src/app/class/product';
import { environment } from '../environments/environment'
import { map } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${environment.token}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL_API = `${environment.url_api}`;
  

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
