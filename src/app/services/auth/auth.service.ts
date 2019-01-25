import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Constant = 'http://13.229.103.24';
  constructor(
    private http: HttpClient
  ) { }


  register(body) {
      return this.http.post('',body).toPromise();
}






































}
