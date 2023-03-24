import { Component } from '@angular/core';
import { AppCounterService } from 'src/app/services/app-counter.service';
import { LocalCounerService } from 'src/app/services/local-couner.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounerService],
})
export class CounterComponent {
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounerService
  ) {}
}
