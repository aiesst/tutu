import {Injectable} from "@angular/core";
@Injectable()
export class DriverRegisterValidate {
    formErrors = {
        phoneNumber: [],
        captcha: [],
        name: [],
        idCard: [],
        carLicenseNum: [],
        businessNum: [],
        driverLicense: [],
    };


    //验证提示,phoneNumber名字和<input> formError一致
    validateMessage = {
        phoneNumber: {
           // required: '手机号码是必填项',
            phoneNumberError: "手机号码有误"
        },
        captcha: {
           // required: "验证码是必填项",
          //  numberError: "验证码只能是数字",
          //  lengthError: "验证码的长度错误",
            simpleError:"验证码错误"
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
        }, driverLicense:{
            required: "驾驶证号是必填项"
        }

    };
}
