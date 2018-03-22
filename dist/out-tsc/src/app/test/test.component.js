var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestfulServerRouter } from "../shared/config/http/http-router.config";
import { LoggerService } from "../core/service/logger.service";
export var TestComponent = (function () {
    /// 注入路由管理
    function TestComponent(route, logger) {
        this.route = route;
        this.logger = logger;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ws = new WebSocket(RestfulServerRouter.wsLogin);
        ws.onopen = function (e) {
            _this.logger.log("打开连接", e);
            ws.send("hello world");
        };
        ws.onmessage = function (m) {
            _this.logger.log("接收到消息：", m);
        };
        ws.onerror = function (e) {
            _this.logger.error(e);
        };
        ws.onclose = function (c) {
            _this.logger.log("关闭连接");
        };
    };
    TestComponent.prototype.testWxLogin = function () {
    };
    TestComponent = __decorate([
        Component({
            selector: 'app-test',
            templateUrl: './test.component.html',
            styleUrls: ['./test.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, LoggerService])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/test/test.component.js.map