import { AbstractControl } from '@angular/forms';

export function EmailPhoneValidator(control: AbstractControl) {
  if ((!control.value.includes('@'))) {
      if (!control.value.includes('.com')) {
        return { invalidUrl: true };
      }
    
  }
  return null;
}