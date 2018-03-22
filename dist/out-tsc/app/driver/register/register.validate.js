var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
export var DriverRegisterValidate = (function () {
    function DriverRegisterValidate() {
        this.formErrors = {
            phoneNumber: [],
            captcha: [],
            name: [],
            idCard: [],
            carLicenseNum: [],
            businessNum: [],
            driverLicense: [],
        };
        //验证提示,phoneNumber名字和<input> formError一致
        this.validateMessage = {
            phoneNumber: {
                // required: '手机号码是必填项',
                phoneNumberError: "手机号码有误"
            },
            captcha: {
                // required: "验证码是必填项",
                //  numberError: "验证码只能是数字",
                //  lengthError: "验证码的长度错误",
                simpleError: "验证码错误"
            },
            name: {
                required: "姓名是必填项"
            },
            idCard: {
                // required: "身份证是必填项",
                idCardError: "身份证输入有误"
            },
            carLicenseNum: {
                // required: "车牌号是必填项",
                carLicenseError: "车牌号错误"
            }, driverLicense: {
                required: "驾驶证号是必填项"
            }
        };
    }
    DriverRegisterValidate = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], DriverRegisterValidate);
    return DriverRegisterValidate;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/driver/register/register.validate.js.map