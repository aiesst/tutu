import {Directive} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
@Directive({
    selector: "[validateCarLicense]",
    providers: [{
        provide: NG_VALIDATORS, useExisting: CarLicenseValidator,
        multi: true
    }]
})

/**
 * 车牌号校验 <input validateCarLicense />
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-14
 * @version    : v1.0
 */
export class CarLicenseValidator implements Validator {
    validate(formControl: AbstractControl): {[p: string]: any} {
        let carLicenseRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        if (carLicenseRegExp.test(formControl.value)) {
            return null;
        }
        return {
            carLicenseError: {
                valid: false
            }
        }
    }

}
