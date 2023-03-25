import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MyValidators } from 'src/app/my.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  capitalMap = {
    pl: 'Warsaw',
    ua: 'Kyiv',
    ge: 'Tbilisi',
  };

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get country() {
    return this.form.get('address')?.get('country');
  }
  get city() {
    return this.form.get('address')?.get('city');
  }
  get skills() {
    return this.form.get('skills') as FormArray;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails,
      ]),
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(12),
        Validators.required,
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', [
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.required,
        ]),
      }),
      skills: new FormArray([]),
    });
  }

  submit() {
    console.log('this.form', this.form);
    if (this.form.valid) {
      const { value } = this.form;
      console.log(value);
    }
  }

  hideTitle(fieldName: string): void;
  hideTitle(groupName: string, fieldName: string): void;
  hideTitle(groupName: string, fieldName?: string) {
    if (!fieldName) {
      this.form.get(groupName)?.markAsUntouched();
    } else {
      this.form.get(groupName)?.get(fieldName)?.markAsUntouched();
    }
  }

  setCapital() {
    const cityKey = this.country?.value as keyof typeof this.capitalMap;
    const capital = this.capitalMap[cityKey];
    this.form.patchValue({ address: { city: capital } });
  }

  addSkill() {
    const control = new FormControl('', [Validators.required]);
    (this.form.get('skills') as FormArray).push(control);
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
  }
}
