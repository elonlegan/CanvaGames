import { Component } from '@angular/core';
import { NewsService } from '@app/services/news.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  news: any = [];
  loading: boolean = true;

  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.newsService
      .get()
      .pipe(first())
      .subscribe((news: any) => {
        this.news = news.articles;
        this.loading = false;
      });
  }
}
