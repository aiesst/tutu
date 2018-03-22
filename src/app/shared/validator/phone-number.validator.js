"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
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
var PhoneNumberValidator = (function () {
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
        core_1.Directive({
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
                { provide: forms_1.NG_VALIDATORS, useExisting: PhoneNumberValidator, multi: true }
            ]
        })
    ], PhoneNumberValidator);
    return PhoneNumberValidator;
}());
exports.PhoneNumberValidator = PhoneNumberValidator;
