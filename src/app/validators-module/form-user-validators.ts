import {AbstractControl} from '@angular/forms';

export class FormUserValidators {
  static validatePassword(control: AbstractControl): {[key: string]: any} {
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&])[A-Za-z\d@#$%^&]{8,}$/.test(control.value)) {
      return { validPassword: true };
    }
    return null;
  }
  static ValidatePhone(control: AbstractControl): {[key: string]: any} {
    if (/[0-9()+-]{9,}/.test(control.value)) {
      return { validPhone: true };
    }
    return null;
  }
}
