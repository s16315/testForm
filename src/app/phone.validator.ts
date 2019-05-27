import { AbstractControl, Validator } from '@angular/forms';
export function ValidatePhone(control: AbstractControl) {
  if (/[0-9()+-]{9,}/.test(control.value)) {
    return { validPassword: true };
  }
  return null;
}
