import { AbstractControl, ValidationErrors } from '@angular/forms';

export class noHashChar {
  static noHashCharValidations(control: AbstractControl): ValidationErrors | null {
    const input = control.value as string;
    console.log('>> split',input.split(" "));
    console.log('>> input.indexOf("#")',input.indexOf("#"));
    
    if (input.indexOf('#') > -1) return { noHashCharValidator: true };
    return null;
  }
}
