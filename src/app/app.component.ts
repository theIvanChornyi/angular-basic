import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  init: 'TITLE' = 'TITLE';
  title: string = this.init;

  inputValue: string = '';
  onHandleInput(e: Event) {
    this.inputValue = (<HTMLInputElement>e.target).value.trim();
    this.title = this.inputValue ? this.inputValue : this.init;
  }

  onHandleReset() {
    this.title = this.init;
    const input = document.querySelector('input');
    if (input) {
      input.value = '';
    }
  }
  onHandleBlur(fieldValue: string) {
    this.inputValue = fieldValue.trim().toUpperCase();
    this.title = this.inputValue;
  }
}
