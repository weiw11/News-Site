import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsAPIInterface } from '../../api/news-interface';
import { NewsApiService } from '../../api/news-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit, OnDestroy {

  data: NewsAPIInterface | undefined;

  constructor(private newsService: NewsApiService) {
    this.subscription = this.newsService.getTopHeadlines().subscribe(data => this.data = data);
  }

  subscription: Subscription;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



