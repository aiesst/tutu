var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoggerService } from "../service/logger.service";
import { WeixinLogin } from "./login.model";
import { Injectable } from "@angular/core";
import { RxService } from "../service/rx-service";
import { Http, URLSearchParams } from "@angular/http";
import { RestfulServerRouter } from "../../shared/config/http/http-router.config";
import { isNullOrUndefined } from "util";
import { SimpleUtil } from "../util/simple.util";
import { HttpAccountService } from "../account/account.service";
/**
 * 微信接入服务
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
export var WeixinService = (function () {
    function WeixinService(logger, rxService, http, httpAccountService) {
        this.logger = logger;
        this.rxService = rxService;
        this.http = http;
        this.httpAccountService = httpAccountService;
    }
    /**
     * 通过微信的回调登录获取用户数据
     * @param login  回调数据
     * @returns {Observable<T>}
     */
    WeixinService.prototype.getHttpAccount = function (login) {
        var _this = this;
        return this.rxService.makeObservable(function (observer) {
            var params = new URLSearchParams();
            params.set("code", login.code);
            params.set("state", login.state);
            // alert("code: "+login.code);
            // alert("state: "+login.state);
            _this.http.get(RestfulServerRouter.getHttpAccountByWeixin, { search: params })
                .map(_this.rxService.httpSignalDataMap)
                .subscribe(observer);
        });
    };
    /**
     * 通过Url的参数生成微信登录模型
     * @returns {WeixinLogin}
     */
    WeixinService.prototype.getWeixinByUrlParams = function () {
        var wxLogin;
        var state = SimpleUtil.getQueryString("state");
        var code = SimpleUtil.getQueryString("code");
        wxLogin = new WeixinLogin(code, state);
        return wxLogin;
    };
    /**
     * 通过扫码登录，这时只有电脑一方在线，此时应该关闭微信浏览器
     * @param wxLogin
     * @returns {Observable<R>}
     */
    WeixinService.prototype.loginByQrcode = function (wxLogin) {
        return this.getHttpAccount(wxLogin).map(function (account) {
            return !isNullOrUndefined(account);
        });
    };
    /**
     * 微信直接登录
     * @param wxLogin
     * @returns {any}
     */
    WeixinService.prototype.loginByDirect = function (wxLogin) {
        var _this = this;
        return this.getHttpAccount(wxLogin)
            .switchMap(function (account) { return _this.httpAccountService.login(account); });
    };
    /**
     * 关闭微信浏览器窗口
     */
    WeixinService.prototype.closeWeixinWindow = function () {
        try {
            WeixinJSBridge.call('closeWindow');
        }
        catch (e) {
        }
    };
    WeixinService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService, RxService, Http, HttpAccountService])
    ], WeixinService);
    return WeixinService;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/core/weixin/weixin.service.js.map