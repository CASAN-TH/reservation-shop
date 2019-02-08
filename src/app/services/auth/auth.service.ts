import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Constant = 'http://13.229.103.24';
  constructor(
    private http: HttpClient
  ) {
    console.log(environment.apiURL);
  }

  private authorizationHeader() {
    const token = window.localStorage.getItem(environment.apiURL + '@token');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }
  register(body) {
    console.log(body);
    return this.http.post(environment.apiURL + '/api/auth/signup', body).toPromise();
  }
  sigin(body) {
    return this.http.post(environment.apiURL + '/api/auth/signin', body).toPromise();

  }
  me() {
    return this.http.get(environment.apiURL + '/api/me', { headers: this.authorizationHeader() }).toPromise();
  }







































}
