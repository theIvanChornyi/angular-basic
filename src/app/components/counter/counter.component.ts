import { Component } from '@angular/core';
import { AppCounterService } from 'src/app/services/app-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  constructor(public appCounterService: AppCounterService) {}
}
