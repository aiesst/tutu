"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var http_router_config_1 = require("../../shared/config/http/http-router.config");
var http_result_model_1 = require("../../core/model/http-result.model");
/**
 * 司机注册服务，主要向Oss上传图片，以及向服务器拿token
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
var DriverRegisterService = (function () {
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
    DriverRegisterService.prototype.getOssAcessParam = function (phoneNumber) {
        return this.ossService.getOssAccessParam(phoneNumber);
    };
    DriverRegisterService.prototype.getCaptcha = function (phoneNumber) {
        var params = new http_1.URLSearchParams();
        params.set("phoneNum", phoneNumber);
        return this.http.get(http_router_config_1.RestfulServerRouter.getPhoneCaptcha, {
            search: params
        }).map(this.rxService.serverResultMap).map(function (result) {
            return result.resultCode == http_result_model_1.HttpCode.ok;
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
        //     .map(this.rxService.serverResultMap).flatMap(result => {
        //     switch (result.resultCode) {
        //       //用户首次注册
        //       case HttpCode.ok:
        //       return  this.http.get(RestfulServerRouter.getPhoneCaptcha, {
        //           search: params
        //         }).map(this.rxService.serverResultMap).map(result => {
        //           return result.resultCode == HttpCode.ok;
        //         });
        //
        //
        //       //用户已经注册了
        //       case HttpCode.userIsExist:
        //         observer.error("您已经注册了，无需注册");
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
    DriverRegisterService = __decorate([
        core_1.Injectable()
    ], DriverRegisterService);
    return DriverRegisterService;
}());
exports.DriverRegisterService = DriverRegisterService;
