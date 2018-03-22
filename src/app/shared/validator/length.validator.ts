import {Directive, Input} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
@Directive({
  selector: "[validateLength]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LengthValidator,
    multi: true
  }]
})

/**
 * 长度检验 <input [validateLength]="5">
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-14
 * @version    : v1.0
 */
export class LengthValidator implements Validator {
  @Input("validateLength") length: number;

  validate(c: AbstractControl): {[p: string]: any} {
    if (c.value != null) {
      if (c.value.length != this.length) {
        return {
          lengthError: {
            valid: false
          }
        }
      }
    }
    return null;
  }

}
