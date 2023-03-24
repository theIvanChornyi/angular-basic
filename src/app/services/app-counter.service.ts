import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppCounterService {
  public count = 0;
  public increase() {
    this.count += 1;
  }
  public decrease() {
    this.count -= 1;
  }
}
