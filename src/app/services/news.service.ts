import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

const url = `${environment.apiUrl}q=videogames&sortBy=popularity&pageSize=10&apiKey=${environment.apiKey}`;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(url);
  }
}
