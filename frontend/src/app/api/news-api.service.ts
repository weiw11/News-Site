import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsAPIInterface } from './news-interface';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {


  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<NewsAPIInterface> {
    return this.http.get<NewsAPIInterface>('http://localhost:3000/api/news/top/');
  }
}
