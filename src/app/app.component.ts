import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testForm';

  public RegisteredUserData = this.fb.group({
    name: [''],
    surname: [''],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    pet: ['', Validators.required],
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
  constructor(private fb: FormBuilder) {}
}
