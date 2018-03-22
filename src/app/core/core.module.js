/**
 * 核心模块，只能被 AppModule 导入
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var module_import_guard_1 = require("./module-import-guard");
var core_1 = require("@angular/core");
var rx_service_1 = require("./service/rx-service");
var oss_service_1 = require("./service/oss.service");
var logger_service_1 = require("./service/logger.service");
var cache_service_1 = require("./service/cache.service");
var platform_browser_1 = require("@angular/platform-browser");
var page_service_1 = require("./service/page.service");
var weixin_service_1 = require("./weixin/weixin.service");
var http_option_config_1 = require("../shared/config/http/http-option.config");
var http_1 = require("@angular/http");
var cache_encrypt_service_1 = require("./service/cache-encrypt.service");
var account_service_1 = require("./account/account.service");
var debug_service_1 = require("./debug.service");
var login_guard_service_1 = require("./guard/login-guard.service");
var app_service_1 = require("../app.service");
var CoreModule = (function () {
    function CoreModule(parentModule, debugService, accountService, logger) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
        debugService.startDebug();
        //全局自动登录
        accountService.autoLogin().subscribe(function (isLogin) {
            logger.log("自动登录结果", isLogin);
        });
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        providers: [
            logger_service_1.loggerServiceProvider,
            cache_encrypt_service_1.cacheEncryptServiceProvider,
            rx_service_1.RxService,
            oss_service_1.OssService,
            //缓存
            cache_service_1.SessionCacheService,
            cache_service_1.MemoryCacheService,
            cache_service_1.LocalCacheService,
            //设置<title></title>
            platform_browser_1.Title,
            page_service_1.PageService,
            account_service_1.HttpAccountService,
            weixin_service_1.WeixinService,
            http_option_config_1.TuTuRequestOptions,
            //请求头部设置
            { provide: http_1.RequestOptions, useExisting: http_option_config_1.TuTuRequestOptions },
            //调试设置
            debug_service_1.DebugService,
            account_service_1.HttpAccountService,
            //路由守卫
            login_guard_service_1.LoginGuard,
            app_service_1.AppService
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf())
], CoreModule);
exports.CoreModule = CoreModule;
