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
import { Directive } from "@angular/core";
function validatePhoneNum() {
    return function (c) {
        var phoneNumberRegexp = /^1[34578]\d{9}$/;
        if (phoneNumberRegexp.test(c.value)) {
            return null;
        }
        else
            return {
                phoneNumberError: {
                    valid: false
                }
            };
    };
}
export var PhoneNumberValidator = (function () {
    function PhoneNumberValidator() {
        this.validator = validatePhoneNum();
    }
    PhoneNumberValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    PhoneNumberValidator.phoneNumberIsValid = function (phoneNumber) {
        var phoneNumberRegexp = /^1[34578]\d{9}$/;
        return phoneNumberRegexp.test(phoneNumber);
    };
    PhoneNumberValidator = __decorate([
        Directive({
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
                { provide: NG_VALIDATORS, useExisting: PhoneNumberValidator, multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PhoneNumberValidator);
    return PhoneNumberValidator;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/shared/validator/phone-number.validator.js.map