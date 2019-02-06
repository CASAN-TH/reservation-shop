import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueuelistService {

  constructor(public http: HttpClient) { }
  private authorizationHeader() {
    const token = window.localStorage.getItem(environment.apiURL + '@token');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }
  getQueueList(id) {
    return this.http.get(environment.apiURL + '/api/queues-list/' + id).toPromise();
  }
  queueUpdate(body) {
    return this.http.post(environment.apiURL + '/api/queues-update/', body).toPromise()
  }
}
