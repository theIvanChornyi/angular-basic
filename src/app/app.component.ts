import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  e = Math.E;
  string = 'Hello angular world';
  date = new Date();
  float = 0.42;
  obj = { a: 2, b: { c: [1, 2, 3, 4], d: 'qwe' } };
  number = 2;
}
