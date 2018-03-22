"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DriverRegisterValidate = (function () {
    function DriverRegisterValidate() {
        this.formErrors = {
            phoneNumber: [],
            captcha: [],
            name: [],
            idCard: [],
            carLicenseNum: [],
            businessNum: []
        };
        //验证提示,phoneNumber名字和<input> formError一致
        this.validateMessage = {
            phoneNumber: {
                required: '手机号码是必填项',
                phoneNumberError: "手机号码有误"
            },
            captcha: {
                required: "验证码是必填项",
                numberError: "验证码只能是数字",
                lengthError: "验证码的长度错误"
            },
            name: {
                required: "姓名是必填项"
            },
            idCard: {
                required: "身份证是必填项",
                idCardError: "身份证输入有误"
            },
            carLicenseNum: {
                required: "车牌号是必填项",
                carLicenseError: "车牌号错误"
            }
        };
    }
    DriverRegisterValidate = __decorate([
        core_1.Injectable()
    ], DriverRegisterValidate);
    return DriverRegisterValidate;
}());
exports.DriverRegisterValidate = DriverRegisterValidate;
