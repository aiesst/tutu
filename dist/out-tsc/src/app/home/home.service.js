var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoggerService } from "../core/service/logger.service";
import { WeixinService } from "../core/weixin/weixin.service";
import { Injectable } from "@angular/core";
import { HttpAccountService } from "../core/account/account.service";
import { Http } from "@angular/http";
import { RestfulServerRouter } from "../shared/config/http/http-router.config";
import { RxService } from "../core/service/rx-service";
import { isNullOrUndefined } from "util";
export var HomeService = (function () {
    function HomeService(logger, wxService, httpAccountService, http, rxService) {
        this.logger = logger;
        this.wxService = wxService;
        this.httpAccountService = httpAccountService;
        this.http = http;
        this.rxService = rxService;
    }
    HomeService.prototype.getHttpAccountName = function () {
        var account = this.httpAccountService.getHttpAccount();
        if (isNullOrUndefined(account)) {
            return null;
        }
        return account.weiXinName || account.nickName;
    };
    HomeService.prototype.submitTravelBooking = function (tb) {
        var _this = this;
        var str = JSON.stringify(tb);
        return this.rxService.makeObservable(function (observer) {
            _this.http.post(RestfulServerRouter.travelBooking, { str: str }).map(_this.rxService.httpSignalDataMap).subscribe(function (data) {
                observer.next(true);
                observer.complete();
            }, function (error) {
                observer.next(false);
                observer.complete();
            });
        });
    };
    HomeService.prototype.submitContactUs = function (contact) {
        var _this = this;
        var postStr = JSON.stringify(contact);
        return this.rxService.makeObservable(function (observer) {
            _this.http.post(RestfulServerRouter.contactUs, { postStr: postStr }).map(_this.rxService.httpSignalDataMap).subscribe(function (data) {
                observer.next(true);
                observer.complete();
            }, function (error) {
                _this.logger.error(error);
                observer.next(false);
                observer.complete();
            });
        });
    };
    /**
     * 通过微信登录
     * @param wxLogin 微信登录模型
     */
    HomeService.prototype.loginByWeixin = function (wxLogin) {
        var _this = this;
        this.wxService.getHttpAccount(wxLogin).subscribe(function (httpAccount) {
            //登录成功
            if (_this.httpAccountService.login(httpAccount)) {
                _this.logger.log("登录成功");
            }
            else {
                _this.logger.log("登录失败");
            }
        }, function (error) { return _this.logger.error(error); });
    };
    HomeService.prototype.testAutoLogin = function () {
    };
    HomeService.cacheKeyPrefix = "home_service_";
    HomeService.CacheKeyHttpToken = HomeService.cacheKeyPrefix + "http_token";
    HomeService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService, WeixinService, HttpAccountService, Http, RxService])
    ], HomeService);
    return HomeService;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/home/home.service.js.map