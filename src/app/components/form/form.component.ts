import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

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

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
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
    if (this.hideTitle.length === 1) {
      this.form.get(groupName)?.markAsUntouched();
    }
    if (this.hideTitle.length === 2 && fieldName) {
      this.form.get(groupName)?.get(fieldName)?.markAsUntouched();
    }
  }
}
