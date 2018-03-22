"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var IdCardValidator = (function () {
    function IdCardValidator() {
    }
    IdCardValidator = __decorate([
        core_1.Directive({
            selector: '[validateIdCard]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS, useValue: function (formControl) {
                        var idCardRegexp15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                        var idCardRegexp18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                        if (idCardRegexp18.test(formControl.value) || idCardRegexp15.test(formControl.value)) {
                            return null;
                        }
                        return {
                            idCardError: {
                                valid: false
                            }
                        };
                    },
                    multi: true
                }]
        })
    ], IdCardValidator);
    return IdCardValidator;
}());
exports.IdCardValidator = IdCardValidator;
