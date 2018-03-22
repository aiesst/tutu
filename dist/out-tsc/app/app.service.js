var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from "@angular/router";
import { WeixinService } from "./core/weixin/weixin.service";
import { HttpAccountService } from "./core/account/account.service";
import { LoggerService } from "./core/service/logger.service";
import { Injectable } from "@angular/core";
import { WeixinConfig } from "./shared/config/weixin.config";
/**
 * 程序启动服务，用于决策程序运行条件
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */
export var AppService = (function () {
    function AppService(logger, wxService, router, accountService) {
        this.logger = logger;
        this.wxService = wxService;
        this.router = router;
        this.accountService = accountService;
    }
    AppService.prototype.weixinLogin = function () {
        var _this = this;
        var wxLogin = this.wxService.getWeixinByUrlParams();
        if (!wxLogin.isEnable()) {
            //全局自动登陆
            this.accountService.autoLogin().subscribe(function (isLogin) {
                if (!isLogin) {
                    window.location.href = WeixinConfig.getDirectUrl();
                }
            });
        }
        else if (wxLogin.isLoginByQrcode()) {
            this.wxService.loginByQrcode(wxLogin)
                .subscribe(function (isLogin) {
                _this.accountService.autoLogin().subscribe(function (isLogin) {
                    if (!isLogin) {
                        window.location.href = WeixinConfig.getDirectUrl();
                    }
                });
            });
        }
        else if (wxLogin.isLoginByDirect()) {
            this.wxService.loginByDirect(wxLogin)
                .subscribe(function (isLogin) {
                if (!isLogin) {
                    alert("自动登录失败，请重新登录");
                    _this.wxService.closeWeixinWindow();
                }
            });
        }
    };
    AppService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService, WeixinService, Router, HttpAccountService])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/app.service.js.map