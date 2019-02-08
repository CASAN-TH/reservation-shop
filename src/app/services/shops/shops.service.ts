import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(public http: HttpClient) { }
  getShopById(_id) {
    return this.http.get(environment.apiURL + '/api/shops-me/' + _id).toPromise()
  }

}
