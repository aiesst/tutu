/**
 * 核心模块，只能被 AppModule 导入
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */

import {throwIfAlreadyLoaded} from './module-import-guard'
import {NgModule, SkipSelf, Optional} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RxService} from "./service/rx-service";
import {OssService} from "./service/oss.service";
import {loggerServiceProvider, LoggerService, ProdLoggerService, DebugLoggerService} from "./service/logger.service";

import {
    LocalCacheService, SessionCacheService,
    MemoryCacheService
} from "./service/cache.service";
import {Title as TitleService} from "@angular/platform-browser";
import {PageService} from "./service/page.service";
import {WeixinService} from "./weixin/weixin.service";
import {TuTuRequestOptions} from "../shared/config/http/http-option.config";
import {RequestOptions} from "@angular/http";

import {cacheEncryptServiceProvider, CacheEncryptService} from "./service/cache-encrypt.service";
import {HttpAccountService} from "./account/account.service";
import {DebugService} from "./debug.service";
import {LoginGuard} from "./guard/login-guard.service";
import {AppService} from "../app.service";


@NgModule({
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
        {provide: RequestOptions, useExisting: TuTuRequestOptions},
        //调试设置
        DebugService,
        HttpAccountService,
        //路由守卫
        LoginGuard,
        AppService

    ],
})

/**
 * 该模块模块只存放全局的单例服务，和util工具，只能被 AppModule 导入
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule,
                debugService:DebugService,
                accountService:HttpAccountService,
                logger:LoggerService) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
        debugService.startDebug();
        //全局自动登录
        accountService.autoLogin().subscribe(isLogin=>{
            logger.log("自动登录结果",isLogin);
        })

    }


}


