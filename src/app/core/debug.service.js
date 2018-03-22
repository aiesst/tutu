"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var http_router_config_1 = require("../shared/config/http/http-router.config");
var DebugService = (function () {
    function DebugService(accountService, logger, route) {
        this.accountService = accountService;
        this.logger = logger;
        this.route = route;
    }
    DebugService.prototype.startDebug = function () {
        //调试设置
        if (!environment_1.environment.production) {
            this.logger.log("------------------------开启调试模式--------------------------");
            //登陆测试账号
            // this.accountService.login(new HttpAccount("hello", "world", HttpAccount.infinityExpire));
            //调试服务器
            http_router_config_1.RestfulServerRouter.baseUrl = http_router_config_1.RestfulServerRouter.localBaseUrl;
            http_router_config_1.RestfulServerRouter.updateRouter();
        }
    };
    return DebugService;
}());
DebugService = __decorate([
    core_1.Injectable()
], DebugService);
exports.DebugService = DebugService;
