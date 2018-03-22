"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var preload_selected_modules_model_1 = require("./core/model/preload-selected-modules.model");
//程序启动路由，只用来配置默认路由和懒加载模块，其余特性路由到特性文件夹配置
//记得同步手动修改 AppRouter
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot([
                {
                    path: '',
                    loadChildren: 'app/home/home.module#HomeModule',
                    data: {
                        preload: false
                    }
                },
                {
                    path: "login",
                    loadChildren: 'app/login/login.module#LoginModule',
                    data: {
                        preload: false
                    }
                },
                {
                    path: "driver",
                    loadChildren: 'app/driver/driver.module#DriverModule',
                    data: {
                        preload: false
                    }
                }, {
                    path: "test",
                    loadChildren: 'app/test/test.module#TestModule',
                    data: {
                        preload: false
                    }
                }
            ], { preloadingStrategy: preload_selected_modules_model_1.PreloadSelectedModules })],
        providers: [preload_selected_modules_model_1.PreloadSelectedModules],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
/**
 * 程序路由
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
*/
var AppRouter = (function () {
    function AppRouter() {
    }
    return AppRouter;
}());
AppRouter.home = "/";
AppRouter.login = "/login";
AppRouter.driver = "driver";
AppRouter.test = "/test";
exports.AppRouter = AppRouter;
