import { Component } from '@angular/core';

enum CONTROLS_TYPES {
  POSITIVE = '_positive',
  NEUTRAL = '_neutral',
  NEGATIVE = '_negative',
}
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  private [CONTROLS_TYPES.POSITIVE] = 0;
  private [CONTROLS_TYPES.NEGATIVE] = 0;
  private [CONTROLS_TYPES.NEUTRAL] = 0;
  private _percentage: number = 0;

  private calcStat(): number {
    const sum = this.positive + this.negative + this.neutral;
    return (this.positive / sum) * 100;
  }

  get positive(): number {
    return this[CONTROLS_TYPES.POSITIVE];
  }
  get negative(): number {
    return this[CONTROLS_TYPES.NEGATIVE];
  }
  get neutral(): number {
    return this[CONTROLS_TYPES.NEUTRAL];
  }
  get percentage(): number {
    return Math.ceil(this._percentage);
  }
  get fieldName(): typeof CONTROLS_TYPES {
    return CONTROLS_TYPES;
  }

  public onHandleClick(fieldName: CONTROLS_TYPES) {
    this[fieldName] += 1;
    this._percentage = this.calcStat();
  }
  public onLeave(e: MouseEvent) {
    (<HTMLButtonElement>e.target).blur();
  }
}
