import { AbstractControl, Validator } from '@angular/forms';
export function ValidatePassword(control: AbstractControl) {
  if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&])[A-Za-z\d@#$%^&]{8,}$/.test(control.value)) {
    return { validPassword: true };
  }
  return null;
}
