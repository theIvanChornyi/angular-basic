import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(12),
        Validators.required,
      ]),
    });
  }
  submit() {
    console.log('this.form', this.form);
    if (this.form.valid) {
      const { value } = this.form;
      console.log(value);
    }
  }
  hideTitle(fieldName: string) {
    this.form.get(fieldName)?.markAsUntouched();
  }
}
