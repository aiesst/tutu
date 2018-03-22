var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
export var CarLicenseValidator = (function () {
    function CarLicenseValidator() {
    }
    CarLicenseValidator.prototype.validate = function (formControl) {
        var carLicenseRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        if (carLicenseRegExp.test(formControl.value)) {
            return null;
        }
        return {
            carLicenseError: {
                valid: false
            }
        };
    };
    CarLicenseValidator = __decorate([
        Directive({
            selector: "[validateCarLicense]",
            providers: [{
                    provide: NG_VALIDATORS, useExisting: CarLicenseValidator,
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], CarLicenseValidator);
    return CarLicenseValidator;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/shared/validator/car-license.validator.js.map