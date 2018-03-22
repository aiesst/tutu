var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, URLSearchParams } from "@angular/http";
import { OssService } from "../../core/service/oss.service";
import { Injectable } from "@angular/core";
import { LoggerService } from "../../core/service/logger.service";
import { RxService } from "../../core/service/rx-service";
import { RestfulServerRouter } from "../../shared/config/http/http-router.config";
import { HttpCode } from "../../core/model/http-result.model";
/**
 * 司机注册服务，主要向Oss上传图片，以及向服务器拿token
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export var DriverRegisterService = (function () {
    function DriverRegisterService(http, logger, ossService, rxService) {
        this.http = http;
        this.logger = logger;
        this.ossService = ossService;
        this.rxService = rxService;
    }
    /**
     * 获取接入 Oss 的凭据
     * @param phoneNumber
     * @returns {Observable<OSSAccessParam>}
     */
    DriverRegisterService.prototype.getOssAccessParam = function (phoneNumber) {
        return this.ossService.getOssAccessParam(phoneNumber);
    };
    DriverRegisterService.prototype.getCaptcha = function (phoneNumber) {
        var params = new URLSearchParams();
        params.set("phoneNum", phoneNumber);
        return this.http.get(RestfulServerRouter.getPhoneCaptcha, {
            search: params
        }).map(this.rxService.httpResultMap).map(function (result) {
            if (result.resultCode == HttpCode.ok) {
                return true;
            }
            else if (result.resultCode == HttpCode.userIsExist) {
                throw new Error("您已经注册了，请勿重复需注册");
            }
            else {
                throw new Error("获取验证码失败");
            }
        });
        // return this.rxService.makeObservable((observer: Observer<boolean>) => {
        //
        //   let params: URLSearchParams = new URLSearchParams();
        //   params.set("phoneNum", phoneNumber);
        //
        //   if(!PhoneNumberValidator.phoneNumberIsValid(phoneNumber)){
        //       observer.error("手机号码有误！");
        //   }
        //
        //   this.http.get(RestfulServerRouter.checkUserExist, {search: params})
        //     .map(this.rxService.httpResultMap).flatMap(result => {
        //     switch (result.resultCode) {
        //       //用户首次注册
        //       case HttpCode.ok:
        //       return  this.http.get(RestfulServerRouter.getPhoneCaptcha, {
        //           search: params
        //         }).map(this.rxService.httpResultMap).map(result => {
        //           return result.resultCode == HttpCode.ok;
        //         });
        //
        //
        //       //用户已经注册了
        //       case HttpCode.userIsExist:
        //         observer.error("您已经注册了，请勿重复需注册");
        //         break;
        //
        //       //系统错误
        //       default:
        //         observer.error(result.resultMsg);
        //         break;
        //
        //     }
        //   }).subscribe(observer);
        // })
    };
    DriverRegisterService.prototype.checkCaptcha = function (phoneNum, captcha) {
        var _this = this;
        var params = new URLSearchParams();
        params.set("phoneNum", phoneNum);
        params.set("captcha", captcha);
        return this.http.get(RestfulServerRouter.checkCaptcha, { search: params })
            .map(this.rxService.httpSignalDataMap).map(function (data) { _this.logger.log("获取的数据", data); return data == "Succ"; });
    };
    DriverRegisterService.prototype.submitDriverRegisterData = function (register) {
        return this.http.post(RestfulServerRouter.driverRegister, register).map(this.rxService.httpSignalDataMap)
            .map(function (data) { return true; });
    };
    DriverRegisterService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, LoggerService, OssService, RxService])
    ], DriverRegisterService);
    return DriverRegisterService;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/driver/register/register.service.js.map