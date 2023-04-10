import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {
    const titleText = this.title.getTitle();
    console.log(titleText);
    this.title.setTitle(Date.now().toString());
    this.meta.addTags([{ name: 'keywords', content: 'angular, google' }]);
  }
}
