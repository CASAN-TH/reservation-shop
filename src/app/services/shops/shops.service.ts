import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(public http: HttpClient) { }
  private authorizationHeader() {
    const token = window.localStorage.getItem(environment.apiURL + '@token');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }
  getShopById(_id) {
    return this.http.get(environment.apiURL + '/api/shops-me/' + _id).toPromise();
  }
  createShop(body) {
    return this.http.post(environment.apiURL + '/api/shops', body, { headers: this.authorizationHeader() }).toPromise();
  }
}
