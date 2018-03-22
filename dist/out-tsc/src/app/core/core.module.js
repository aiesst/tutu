/**
 * 核心模块，只能被 AppModule 导入
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NgModule, SkipSelf, Optional } from "@angular/core";
import { RxService } from "./service/rx-service";
import { OssService } from "./service/oss.service";
import { loggerServiceProvider, LoggerService } from "./service/logger.service";
import { LocalCacheService, SessionCacheService, MemoryCacheService } from "./service/cache.service";
import { Title as TitleService } from "@angular/platform-browser";
import { PageService } from "./service/page.service";
import { WeixinService } from "./weixin/weixin.service";
import { TuTuRequestOptions } from "../shared/config/http/http-option.config";
import { RequestOptions } from "@angular/http";
import { cacheEncryptServiceProvider } from "./service/cache-encrypt.service";
import { HttpAccountService } from "./account/account.service";
import { DebugService } from "./debug.service";
import { LoginGuard } from "./guard/login-guard.service";
import { AppService } from "../app.service";
export var CoreModule = (function () {
    function CoreModule(parentModule, debugService, accountService, logger) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
        debugService.startDebug();
        //全局自动登录
        accountService.autoLogin().subscribe(function (isLogin) {
            logger.log("自动登录结果", isLogin);
        });
    }
    CoreModule = __decorate([
        NgModule({
            providers: [
                loggerServiceProvider,
                cacheEncryptServiceProvider,
                RxService,
                OssService,
                //缓存
                SessionCacheService,
                MemoryCacheService,
                LocalCacheService,
                //设置<title></title>
                TitleService,
                PageService,
                HttpAccountService,
                WeixinService,
                TuTuRequestOptions,
                //请求头部设置
                { provide: RequestOptions, useExisting: TuTuRequestOptions },
                //调试设置
                DebugService,
                HttpAccountService,
                //路由守卫
                LoginGuard,
                AppService
            ],
        }),
        __param(0, Optional()),
        __param(0, SkipSelf()), 
        __metadata('design:paramtypes', [CoreModule, DebugService, HttpAccountService, LoggerService])
    ], CoreModule);
    return CoreModule;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/core/core.module.js.map