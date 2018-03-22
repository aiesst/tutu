"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var weixin_config_1 = require("./shared/config/weixin.config");
/**
 * 程序启动服务，用于决策程序运行条件
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */
var AppService = (function () {
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
            //全局自动登录
            this.accountService.autoLogin().subscribe(function (isLogin) {
                if (!isLogin) {
                    window.location.href = weixin_config_1.WeixinConfig.getDirectUrl();
                }
            });
        }
        else if (wxLogin.isLoginByQrcode()) {
            this.wxService.loginByQrcode(wxLogin)
                .subscribe(function (isLogin) {
                _this.accountService.autoLogin().subscribe(function (isLogin) {
                    if (!isLogin) {
                        window.location.href = weixin_config_1.WeixinConfig.getDirectUrl();
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
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable()
], AppService);
exports.AppService = AppService;
