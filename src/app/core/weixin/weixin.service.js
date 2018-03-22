"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var login_model_1 = require("./login.model");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_router_config_1 = require("../../shared/config/http/http-router.config");
var util_1 = require("util");
var simple_util_1 = require("../util/simple.util");
/**
 * 微信接入服务
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
var WeixinService = (function () {
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
            var params = new http_1.URLSearchParams();
            params.set("code", login.code);
            params.set("state", login.state);
            // alert("code: "+login.code);
            // alert("state: "+login.state);
            _this.http.get(http_router_config_1.RestfulServerRouter.getHttpAccountByWeixin, { search: params })
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
        var state = simple_util_1.SimpleUtil.getQueryString("state");
        var code = simple_util_1.SimpleUtil.getQueryString("code");
        wxLogin = new login_model_1.WeixinLogin(code, state);
        return wxLogin;
    };
    /**
     * 通过扫码登录，这时只有电脑一方在线，此时应该关闭微信浏览器
     * @param wxLogin
     * @returns {Observable<R>}
     */
    WeixinService.prototype.loginByQrcode = function (wxLogin) {
        return this.getHttpAccount(wxLogin).map(function (account) {
            return !util_1.isNullOrUndefined(account);
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
    return WeixinService;
}());
WeixinService = __decorate([
    core_1.Injectable()
], WeixinService);
exports.WeixinService = WeixinService;
