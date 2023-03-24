export class AppCounterService {
  count = 0;
  public increase() {
    this.count += 1;
  }
  public decrease() {
    this.count -= 1;
  }
}
