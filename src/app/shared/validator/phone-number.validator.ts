import {ValidatorFn, AbstractControl, Validator, NG_VALIDATORS} from "@angular/forms";
import {Directive} from "@angular/core";


function validatePhoneNum(): ValidatorFn {
  return (c: AbstractControl) => {
    let phoneNumberRegexp = /^1[34578]\d{9}$/;
    if (phoneNumberRegexp.test(c.value)) {
      return null;
    } else return {
      phoneNumberError: {
        valid: false
      }
    }
  }
}

@Directive({
  selector: '[validatePhoneNumber][ngModel]',
  providers: [
    //两者取其一
    // {
    //   provide: NG_VALIDATORS, useValue: (c) => {
    //   let phoneNumberRegexp = /^1[34578]\d{9}$/;
    //   return phoneNumberRegexp.test(c.value) ? null : {
    //       validatePhoneNum: {
    //         valid: false
    //       }
    //     }
    // }, multi: true
    // }
    {provide: NG_VALIDATORS, useExisting: PhoneNumberValidator, multi: true}
  ]
})

/**
 * 电话号码校验 <input validatePhoneNumber>
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-14
 * @version    : v1.0
 */
export class PhoneNumberValidator implements Validator {


  validator: ValidatorFn;

  constructor() {
    this.validator = validatePhoneNum();
  }

  validate(c: AbstractControl): {[p: string]: any} {
    return this.validator(c);
  }

  static phoneNumberIsValid(phoneNumber:string):boolean{
    let phoneNumberRegexp = /^1[34578]\d{9}$/;
    return  phoneNumberRegexp.test(phoneNumber)

  }

}
