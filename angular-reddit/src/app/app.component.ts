import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.dev', 3),
      new Article('Fullstack', 'https://fullstack.io', 2),
      new Article('Angular Home', 'https://angular.io', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles = [
      ...this.articles,
      new Article(title.value, link.value, 0),
    ];
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
