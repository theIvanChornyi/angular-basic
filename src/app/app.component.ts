import { Component } from '@angular/core';

enum IMAGES {
  ANGULAR = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
  REACT = 'data:image/png;base64,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',
  VUE = 'https://e7.pngegg.com/pngimages/789/586/png-clipart-gray-and-green-v-vue-js-logo-icons-logos-emojis-tech-companies-thumbnail.png',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  init: 'TITLE' = 'TITLE';
  title: string = this.init;

  inputValue: string = '';
  image =
    'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  constructor() {
    setInterval(this.changeIco, 1500);
  }
  private changeIco = () => {
    switch (this.image) {
      case IMAGES.ANGULAR:
        this.image = IMAGES.REACT;
        break;
      case IMAGES.REACT:
        this.image = IMAGES.VUE;
        break;
      default:
        this.image = IMAGES.ANGULAR;
        break;
    }
  };
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
