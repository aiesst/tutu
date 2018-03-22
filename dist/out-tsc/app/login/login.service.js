var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from "@angular/http";
import { LoggerService } from "../core/service/logger.service";
import { RxService } from "../core/service/rx-service";
import { WSocketData } from "./model/websocket.model";
import { RestfulServerRouter } from "../shared/config/http/http-router.config";
import { HttpAccount } from "../core/account/account.model";
import { isNullOrUndefined } from "util";
import { HttpAccountService } from "../core/account/account.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginConfig } from "../shared/config/login.conf";
export var LoginService = (function () {
    function LoginService(http, logger, rxService, httpAccountService, router) {
        this.http = http;
        this.logger = logger;
        this.rxService = rxService;
        this.httpAccountService = httpAccountService;
        this.router = router;
    }
    LoginService.prototype.setLoginFailed = function (handler) {
        this.loginFailedHandler = handler;
    };
    LoginService.prototype.setWsErrorHandler = function (handler) {
        this.wsErrorHandler = handler;
    };
    LoginService.prototype.setWsCloseHandler = function (handler) {
        this.wsCloseHandler = handler;
    };
    LoginService.prototype.setWsOpenHandler = function (handler) {
        this.wsOpenHandler = handler;
    };
    LoginService.prototype.setQrcodeId = function (id) {
        if (id.startsWith("#")) {
            this.qrcodeId = id;
        }
        else {
            this.qrcodeId = "#" + id;
        }
    };
    LoginService.prototype.initWebSocket = function () {
        var _this = this;
        this.socket = new WebSocket(RestfulServerRouter.wsLogin);
        this.socket.onopen = function (event) {
            _this.logger.log("连接Websocket成功");
            if (!isNullOrUndefined(_this.wsOpenHandler)) {
                _this.wsOpenHandler(event);
            }
        };
        this.socket.onclose = function (event) {
            _this.logger.log("WebSocket已经关闭");
            if (!isNullOrUndefined(_this.wsCloseHandler)) {
                _this.wsCloseHandler(event);
            }
        };
        this.socket.onmessage = function (event) {
            var wsocketData = JSON.parse(event.data);
            _this.wsMessageHandler(wsocketData);
        };
        this.socket.onerror = function (error) {
            _this.logger.error(error);
            if (!isNullOrUndefined(_this.wsErrorHandler)) {
                _this.wsErrorHandler(error);
            }
        };
    };
    LoginService.prototype.closeWebSocket = function () {
        this.socket.close();
    };
    LoginService.prototype.refreshWebsocket = function () {
        this.logger.log("准备重连");
        this.initWebSocket();
    };
    /**
     * websocket 数据处理
     * @param wsocketData
     */
    LoginService.prototype.wsMessageHandler = function (wsocketData) {
        var _this = this;
        this.logger.log("接受到的数据", wsocketData);
        var data = wsocketData.data[0];
        try {
            if (data.type) {
            }
        }
        catch (e) {
            return;
        }
        switch (data.type) {
            //等待用户扫描
            case WSocketData.weixinQrcodeType:
                var qrcodeUrl = WSocketData.getWeixinUrl(data.wxState);
                this.logger.log("callbackUrl", qrcodeUrl);
                //生成微信扫码登录二维码
                if (!isNullOrUndefined(qrcodeUrl)) {
                    $(this.qrcodeId).qrcode({
                        width: LoginConfig.qrCodeWidth,
                        height: LoginConfig.qrCodeHeight,
                        text: qrcodeUrl
                    });
                }
                else {
                    this.logger.log("获取到的登录数据有问题数据：", data);
                }
                break;
            //用户已经扫码进入登录
            case WSocketData.userTokenType:
                this.logger.log("扫描成功", data);
                var httpAccount = new HttpAccount(data.userName, data.userToken, +data.expire);
                httpAccount.weiXinName = data.nickName;
                this.httpAccountService.login(httpAccount).subscribe(function (isLogin) {
                    //登陆成功
                    if (isLogin) {
                        _this.router.navigate([_this.httpAccountService.redirectUrl]);
                        _this.socket.close();
                    }
                    else {
                        _this.logger.log("登陆失败");
                        if (!isNullOrUndefined(_this.loginFailedHandler)) {
                            _this.loginFailedHandler();
                        }
                    }
                });
                break;
            default:
                break;
        }
    };
    LoginService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, LoggerService, RxService, HttpAccountService, Router])
    ], LoginService);
    return LoginService;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/login/login.service.js.map