var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { AppService } from "./app.service";
import { ActivatedRoute } from "@angular/router";
/**
 * 根组件，程序的入口组件，用于决策程序启动策略，比如截取路由参数自动登录等等
 * 只有这个组件允许 providers 其它组件的providers应该在顶层routing模块里面
 * 设置
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */
export var AppComponent = (function () {
    function AppComponent(titleService, route, appService) {
        this.titleService = titleService;
        this.route = route;
        this.appService = appService;
        this.bodyClass = '';
        this.titleService.setTitle("途徒");
        //微信浏览器自动登录
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        HostBinding('class'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "bodyClass", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
        }), 
        __metadata('design:paramtypes', [Title, ActivatedRoute, AppService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/app.component.js.map