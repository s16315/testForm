import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registered-user-data',
  templateUrl: './registered-user-data.component.html',
  styleUrls: ['./registered-user-data.component.css']
})
export class RegisteredUserDataComponent {
  RegisteredUser = this.fb.group({
    name: [null, Validators.required],
    surname: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: ['', Validators.required],
    pet: ['other', Validators.required],
    address: this.fb.group({
      city: [''],
      street: [''],
      building: [''],
      flatNo: [''],
    }),
    consents: this.fb.group({
      newsletter: [true],
      sms: [true],
    })
  });

  hasUnitNumber = false;
pets = ['dog', 'cat', 'other'];
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
