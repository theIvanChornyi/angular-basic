import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export type IError = {
  [key: string]: boolean;
} | null;

export class MyValidators {
  private static exeptionEmails = ['www@ww.www', 'qwe@qwe.qwe'];

  static restrictedEmails(control: FormControl) {
    if (MyValidators.exeptionEmails.includes(control.value)) {
      return { restrictedEmail: true };
    }
    return null;
  }

  static uniqEmail(
    control: AbstractControl
  ): Promise<IError> | Observable<IError> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.com') {
          resolve({ uniqEmail: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
