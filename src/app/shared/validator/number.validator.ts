import {Directive} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
@Directive({
    selector: '[validateNumber]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting:NumberValidator,
        multi: true
    }]
})

/**
 * 数字校验 <input validateNumber>
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-14
 * @version    : v1.0
 */
export class NumberValidator implements Validator {
    validate(formControl: AbstractControl): {[p: string]: any} {
        //只能是数字
        if (!isNaN(formControl.value)) {
            return null;
        } else {
            return {
                numberError: {
                    valid: false
                }
            }
        }
    }
}
