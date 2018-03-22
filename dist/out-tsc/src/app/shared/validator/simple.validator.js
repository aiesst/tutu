var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";
export var SimpleValidator = (function () {
    function SimpleValidator() {
    }
    SimpleValidator.prototype.validate = function (c) {
        if (!this.valid) {
            return {
                simpleError: {
                    valid: false
                }
            };
        }
        return null;
    };
    __decorate([
        Input("validateSimple"), 
        __metadata('design:type', Boolean)
    ], SimpleValidator.prototype, "valid", void 0);
    SimpleValidator = __decorate([
        Directive({
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
                { provide: NG_VALIDATORS, useExisting: SimpleValidator, multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleValidator);
    return SimpleValidator;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/shared/validator/simple.validator.js.map