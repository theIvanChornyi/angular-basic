import { FormControl } from '@angular/forms';

export class MyValidators {
  private static exeptionEmails = ['www@ww.www', 'qwe@qwe.qwe'];
  static restrictedEmails(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (MyValidators.exeptionEmails.includes(control.value)) {
      return { restrictedEmail: true };
    }
    return null;
  }
}
