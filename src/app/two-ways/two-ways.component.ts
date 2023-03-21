import { Component } from '@angular/core';

@Component({
  selector: 'app-two-ways',
  templateUrl: './two-ways.component.html',
  styleUrls: ['./two-ways.component.scss'],
})
export class TwoWaysComponent {
  text = '';
  color = '#fff';

  isDark = false;
  onChange() {
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
