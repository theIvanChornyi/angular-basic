import { Component } from '@angular/core';
import { AppCounterService } from 'src/app/services/app-counter.service';

@Component({
  selector: 'app-body-counter',
  templateUrl: './body-counter.component.html',
  styleUrls: ['./body-counter.component.scss'],
})
export class BodyCounterComponent {
  constructor(public appCounterService: AppCounterService) {}
}
