"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_router_config_1 = require("../shared/config/http/http-router.config");
var util_1 = require("util");
var HomeService = HomeService_1 = (function () {
    function HomeService(logger, wxService, httpAccountService, http, rxService) {
        this.logger = logger;
        this.wxService = wxService;
        this.httpAccountService = httpAccountService;
        this.http = http;
        this.rxService = rxService;
    }
    HomeService.prototype.getHttpAccountName = function () {
        var account = this.httpAccountService.getHttpAccount();
        if (util_1.isNullOrUndefined(account)) {
            return null;
        }
        return account.weiXinName || account.nickName;
    };
    HomeService.prototype.submitTravelBooking = function (tb) {
        var _this = this;
        var str = JSON.stringify(tb);
        return this.rxService.makeObservable(function (observer) {
            _this.http.post(http_router_config_1.RestfulServerRouter.travelBooking, { str: str }).map(_this.rxService.httpSignalDataMap).subscribe(function (data) {
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
            _this.http.post(http_router_config_1.RestfulServerRouter.contactUs, { postStr: postStr }).map(_this.rxService.httpSignalDataMap).subscribe(function (data) {
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
    return HomeService;
}());
HomeService.cacheKeyPrefix = "home_service_";
HomeService.CacheKeyHttpToken = HomeService_1.cacheKeyPrefix + "http_token";
HomeService = HomeService_1 = __decorate([
    core_1.Injectable()
], HomeService);
exports.HomeService = HomeService;
var HomeService_1;
