"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var restful_server_router_1 = require("../shared/config/restful-server-router");
var websocket_model_1 = require("./model/websocket.model");
var util_1 = require("util");
var account_model_1 = require("../account/account.model");
var LoginComponent = (function () {
    function LoginComponent(pageService, logger, httpAccountService, router) {
        this.logger = logger;
        this.httpAccountService = httpAccountService;
        this.router = router;
        pageService.setBackground("home.jpg");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.socket.close();
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.initWebSocket();
        // $("#login_qr_code").qrcode({width: 220, height: 220, text: "size doesn't matter"});
    };
    LoginComponent.prototype.login_code_back = function (event) {
        $("#login-count").css("cssText", "display:block !important;");
        $("#login-weixin").css("cssText", "display:none !important;");
    };
    LoginComponent.prototype.login_code = function (event) {
        $("#login-count").css("cssText", "display:none !important;");
        $("#login-weixin").css("cssText", "display:block !important;");
    };
    LoginComponent.prototype.initWebSocket = function () {
        var _this = this;
        this.socket = new WebSocket(restful_server_router_1.RestfulServerRouter.wsLogin);
        this.socket.onopen = function (event) {
            _this.logger.log("连接Websocket成功", event);
        };
        this.socket.onclose = function (event) {
            _this.logger.log("关闭Websocket，请刷新浏览器");
        };
        this.socket.onmessage = function (event) {
            var wsocketData = JSON.parse(event.data);
            _this.wsocketDataHandle(wsocketData);
        };
    };
    /**
     * websocket 数据处理
     * @param wsocketData
     */
    LoginComponent.prototype.wsocketDataHandle = function (wsocketData) {
        this.logger.log("接受到的数据", wsocketData);
        var data = wsocketData.data[0];
        switch (data.type) {
            //等待用户扫描
            case websocket_model_1.WSocketData.weixinQrcodeType:
                var qrcodeUrl = websocket_model_1.WSocketData.getWeixinUrl(data.wxState);
                //生成微信扫码登录二维码
                if (!util_1.isNullOrUndefined(qrcodeUrl)) {
                    $("#login_weixin_qrcode").qrcode({ width: 220, height: 220, text: qrcodeUrl });
                }
                else {
                    this.logger.log("获取到的登录数据有问题数据：", data);
                }
                break;
            //用户已经扫码进入登录
            case websocket_model_1.WSocketData.userTokenType:
                this.logger.log("扫描成功", data);
                var httpAccount = new account_model_1.HttpAccount(data.userName, data.userToken, +data.expire);
                if (this.httpAccountService.login(httpAccount)) {
                    //进入主页
                    this.router.navigate([""]);
                    this.socket.close();
                }
                else {
                }
                break;
            default:
                break;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
