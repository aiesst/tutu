import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, RequestOptions, BrowserXhr, Http} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {CoreModule} from "./core/core.module";
import {AboutModule} from "./about/about.module";
import {ServiceModule} from "./service/service.module";
import {CompanyModule} from "./company/company.module";

import {ErrorPageModule} from "./error/error-page.module";
import {AppService} from "./app.service";
import {BrowserUtil} from "./core/util/browser.util";
import {WeixinLogin} from "./core/weixin/login.model";
import {Params, ActivatedRoute, Route} from "@angular/router";
import {HomeService} from "./home/home.service";
import {SimpleUtil} from "./core/util/simple.util";

/**
 * 程序配置模块，管理所有的特性模
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-10
 * @version    : v1.0
 */
@NgModule({
    declarations: [
        AppComponent,
    ],

    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,

        CoreModule,
        AboutModule,
        ServiceModule,
        CompanyModule,

        //一定要最后导入
        ErrorPageModule,


    ],
    providers: [HomeService, AppService],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(appService: AppService) {


        if (BrowserUtil.isWexin()) {
            appService.weixinLogin();
        }
    }

}
