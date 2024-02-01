import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
