import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
import {PhoneNumberValidator} from "./phone-number.validator";
import {Directive, Input} from "@angular/core";
@Directive({
    selector: '[validateSimple][ngModel]',
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
        {provide: NG_VALIDATORS, useExisting: SimpleValidator, multi: true}
    ]
})
export class SimpleValidator implements Validator {
    @Input("validateSimple") valid: boolean;

    validate(c: AbstractControl): {[p: string]: any} {
        if (!this.valid) {
            return {
                simpleError: {
                    valid: false
                }
            }
        }
        return null;
    }

}