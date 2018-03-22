"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require("@angular/forms");
var error_altert_component_1 = require("./component/error-altert.component");
var phone_number_validator_1 = require("./validator/phone-number.validator");
var number_validator_1 = require("./validator/number.validator");
var length_validator_1 = require("./validator/length.validator");
var id_card_validator_1 = require("./validator/id-card.validator");
var car_license_validator_1 = require("./validator/car-license.validator");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [error_altert_component_1.ErrorAlterComponent,
                phone_number_validator_1.PhoneNumberValidator, number_validator_1.NumberValidator, length_validator_1.LengthValidator,
                id_card_validator_1.IdCardValidator, car_license_validator_1.CarLicenseValidator],
            exports: [error_altert_component_1.ErrorAlterComponent,
                phone_number_validator_1.PhoneNumberValidator, number_validator_1.NumberValidator, length_validator_1.LengthValidator,
                id_card_validator_1.IdCardValidator, car_license_validator_1.CarLicenseValidator, common_1.CommonModule, forms_1.FormsModule]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
