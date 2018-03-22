"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CarLicenseValidator = (function () {
    function CarLicenseValidator() {
    }
    CarLicenseValidator = __decorate([
        core_1.Directive({
            selector: "[validateCarLicense]",
            providers: [{ provide: forms_1.NG_VALIDATORS, useValue: function (formControl) {
                        var carLicenseRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
                        if (carLicenseRegExp.test(formControl.value)) {
                            return null;
                        }
                        return {
                            carLicenseError: {
                                valid: false
                            }
                        };
                    },
                    multi: true
                }]
        })
    ], CarLicenseValidator);
    return CarLicenseValidator;
}());
exports.CarLicenseValidator = CarLicenseValidator;
