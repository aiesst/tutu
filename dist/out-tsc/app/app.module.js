var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { AboutModule } from "./about/about.module";
import { ServiceModule } from "./service/service.module";
import { CompanyModule } from "./company/company.module";
import { ErrorPageModule } from "./error/error-page.module";
import { AppService } from "./app.service";
import { BrowserUtil } from "./core/util/browser.util";
import { HomeService } from "./home/home.service";
/**
 * 程序配置模块，管理所有的特性模
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-10
 * @version    : v1.0
 */
export var AppModule = (function () {
    function AppModule(appService) {
        if (BrowserUtil.isWexin()) {
            appService.weixinLogin();
        }
    }
    AppModule = __decorate([
        NgModule({
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
        }), 
        __metadata('design:paramtypes', [AppService])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/app.module.js.map