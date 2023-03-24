import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class LocalCounerService {
  public count = 0;
  constructor(private logService: LogService) {}

  public increase() {
    this.logService.log('increasing');
    this.count += 1;
  }
  public decrease() {
    this.logService.log('decreasing');
    this.count -= 1;
  }
}
