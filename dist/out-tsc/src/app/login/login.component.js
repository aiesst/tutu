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
import { PageService } from "../core/service/page.service";
import { LoggerService } from "../core/service/logger.service";
import { LoginService } from "./login.service";
export var LoginComponent = (function () {
    function LoginComponent(pageService, logger, loginService) {
        this.pageService = pageService;
        this.logger = logger;
        this.loginService = loginService;
        this.login_qrcode_id = "#login_qrcode";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.pageService.setBackground("home1.jpg");
    };
    LoginComponent.prototype.refreshQrcode = function () {
        this.logger.log("刷新二维码");
        //$(this.login_qrcode_id).hide(1000);
        // this.loginService.refreshWebsocket();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.loginService.closeWebSocket();
        this.pageService.clearBackground();
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.loginService.initWebSocket();
        this.loginService.setQrcodeId("login_qrcode");
        this.loginService.setWsCloseHandler(function (event) {
            //TODO 提醒用户刷新
        });
    };
    LoginComponent.prototype.switchLoginMethod = function (type) {
        switch (type) {
            case 1:
                $("#login-count").css("cssText", "display:block !important;");
                $("#login-weixin").css("cssText", "display:none !important;");
                break;
            case 2:
                $("#login-count").css("cssText", "display:none !important;");
                $("#login-weixin").css("cssText", "display:block !important;");
                break;
        }
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [PageService, LoggerService, LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/login/login.component.js.map