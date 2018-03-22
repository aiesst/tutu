"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
var about_module_1 = require("./about/about.module");
var service_module_1 = require("./service/service.module");
var company_module_1 = require("./company/company.module");
var error_page_module_1 = require("./error/error-page.module");
var app_service_1 = require("./app.service");
var browser_util_1 = require("./core/util/browser.util");
var home_service_1 = require("./home/home.service");
/**
 * 程序配置模块，管理所有的特性模
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-10
 * @version    : v1.0
 */
var AppModule = (function () {
    function AppModule(appService) {
        if (browser_util_1.BrowserUtil.isWexin()) {
            appService.weixinLogin();
        }
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            core_module_1.CoreModule,
            about_module_1.AboutModule,
            service_module_1.ServiceModule,
            company_module_1.CompanyModule,
            //一定要最后导入
            error_page_module_1.ErrorPageModule,
        ],
        providers: [home_service_1.HomeService, app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
