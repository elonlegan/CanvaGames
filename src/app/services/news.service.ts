import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';

const url = `${environment.apiUrl}countries=US&topic=gaming&page_size=10`;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  get() {
    let headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.get(url, { headers: headers });
  }
}
