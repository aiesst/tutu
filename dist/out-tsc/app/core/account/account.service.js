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
import { HttpAccount } from "./account.model";
import { LoggerService } from "../service/logger.service";
import { LocalCacheService } from "../service/cache.service";
import { TuTuRequestOptions } from "../../shared/config/http/http-option.config";
import { RxService } from "../service/rx-service";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { isNullOrUndefined } from "util";
import { Base64Util } from "../util/base64.util";
import { RestfulServerRouter } from "../../shared/config/http/http-router.config";
/**
 * 保存用户信息，生成保存token 和设置全局的http header
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
export var HttpAccountService = (function () {
    function HttpAccountService(logger, localCache, requestOptions, rxService, http, router) {
        this.logger = logger;
        this.localCache = localCache;
        this.requestOptions = requestOptions;
        this.rxService = rxService;
        this.http = http;
        this.router = router;
        //用于路由守卫(需要同步数据)
        this.isAccountLogin = false;
    }
    Object.defineProperty(HttpAccountService.prototype, "redirectUrl", {
        get: function () {
            if (isNullOrUndefined(this._redirectUrl)) {
                return "";
            }
            return this._redirectUrl;
        },
        set: function (url) {
            this._redirectUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 登录，主要实现对Http Basic Auth 的添加
     * TODO 还未添加登录验证
     * @param account 账户
     */
    HttpAccountService.prototype.login = function (account) {
        this.setHttpAccount(account);
        return this.refreshLogin();
    };
    /**
     * 自动登录服务器，从缓存中读取账户，即设置http header 的basic guard
     * @returns {boolean}
     */
    HttpAccountService.prototype.autoLogin = function () {
        return this.login(this.getHttpAccountFromCache());
    };
    /**
     * 该设置会影响到全局的认证
     * @param account
     */
    HttpAccountService.prototype.setHttpAccount = function (account) {
        if (isNullOrUndefined(account)) {
            return;
        }
        try {
            this.account = account;
            var base64token = HttpAccountService.generateAuth(account.userName, account.userToken);
            this.requestOptions.setHeader("Authorization", base64token);
            this.logger.log("已经设置了访问头部", this.requestOptions);
            this.localCache.set(HttpAccountService.CacheKeyHttpAccount, account, { expires: HttpAccount.expireMs(account) });
        }
        catch (e) {
            this.logger.error("异常 httpAccountService", e);
            throw e;
        }
    };
    HttpAccountService.prototype.getHttpAccount = function () {
        if (!isNullOrUndefined(this.account)) {
            return this.account;
        }
        else {
            this.account = this.getHttpAccountFromCache();
            return this.account;
        }
    };
    /**
     * 从缓存中获取账户
     * @returns {any}
     */
    HttpAccountService.prototype.getHttpAccountFromCache = function () {
        try {
            return this.localCache.get(HttpAccountService.CacheKeyHttpAccount);
        }
        catch (e) {
            return null;
        }
    };
    /**
     * 注销清空数据
     */
    HttpAccountService.prototype.logout = function () {
        this.account = null;
        this.isAccountLogin = false;
        this.localCache.remove(HttpAccountService.CacheKeyHttpAccount);
        this.requestOptions.deleteHeader("Authorization");
    };
    /**
     * 检查是否登录过
     * @returns {boolean}
     */
    HttpAccountService.prototype.canLogin = function () {
        return !isNullOrUndefined(this.getHttpAccount());
    };
    /**
     * 检查是否登陆，通过请求服务器来捕获异常实现
     */
    HttpAccountService.prototype.refreshLogin = function () {
        var _this = this;
        return this.rxService.makeObservable(function (observer) {
            _this.http.get(RestfulServerRouter.checkIsLogin).map(_this.rxService.httpResultMap).subscribe(function (data) {
                _this.isAccountLogin = true;
                observer.next(true);
                observer.complete();
            }, function (error) {
                _this.logger.log("登陆错误", error);
                //注销之前保存的数据
                _this.logout();
                observer.next(false);
                observer.complete();
            });
        });
    };
    /**
     * 生成 Authorization Header
     * @param userName
     * @param userToken
     * @returns {string}
     */
    HttpAccountService.generateAuth = function (userName, userToken) {
        var plainToken = userName + ":" + userToken;
        var base64Token = "Basic " + Base64Util.base64Encode(plainToken);
        return base64Token;
    };
    HttpAccountService.CacheKeyPrefix = "http_account_service";
    HttpAccountService.CacheKeyHttpAccount = HttpAccountService.CacheKeyPrefix + "_http_account";
    HttpAccountService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService, LocalCacheService, TuTuRequestOptions, RxService, Http, Router])
    ], HttpAccountService);
    return HttpAccountService;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/account/account.service.js.map