import {Directive} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
@Directive({
    selector: '[validateIdCard]',
    providers: [{
        provide: NG_VALIDATORS, useExisting:IdCardValidator,
        multi:true
    }]
})
/**
 * 身份证验证 <input validateIdCard>
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-14
 * @version    : v1.0
 */
export  class IdCardValidator implements Validator{
    validate(formControl: AbstractControl): {[p: string]: any} {
        let idCardRegexp15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        let idCardRegexp18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if (idCardRegexp18.test(formControl.value) || idCardRegexp15.test(formControl.value)) {
            return null;
        }
        return {
            idCardError: {
                valid: false
            }
        }
    }
}
