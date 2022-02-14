import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function commaValidator(exp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = !exp.test(control.value);
      return forbidden ? {forbiddenInput: {value: control.value}} : null;
    };
  }