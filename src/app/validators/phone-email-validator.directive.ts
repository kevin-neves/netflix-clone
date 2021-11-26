import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneEmail(): ValidatorFn {  
  return (control: AbstractControl): ValidationErrors | null =>  {
    const value = control.value;
    if(!value) {
      return null
    }

    const isPhone = /^\(?([0-9]{2,3})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/.test(value)
    const isEmail = /^\w{2,}.?\w{2,}.?\w{2,}?@\w{2,}\.\w{2,4}(.{2,3})?$/.test(value)
    if (isPhone) {
      const isRepetiton = /(\d)\1{10,12}/.test(value)
      return isRepetiton ? {emailPhone : true} : null;
    }

    const validEmailOrPhone = isEmail

    return !validEmailOrPhone ? {emailPhone : true} : null;
  }
}

