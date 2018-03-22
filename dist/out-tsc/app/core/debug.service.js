var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpAccountService } from "./account/account.service";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { LoggerService } from "./service/logger.service";
import { RestfulServerRouter } from "../shared/config/http/http-router.config";
import { ActivatedRoute } from "@angular/router";
export var DebugService = (function () {
    function DebugService(accountService, logger, route) {
        this.accountService = accountService;
        this.logger = logger;
        this.route = route;
    }
    DebugService.prototype.startDebug = function () {
        //调试设置
        if (!environment.production) {
            this.logger.log("------------------------开启调试模式--------------------------");
            //登陆测试账号
            // this.accountService.login(new HttpAccount("hello", "world", HttpAccount.infinityExpire));
            //调试服务器
            RestfulServerRouter.baseUrl = RestfulServerRouter.localBaseUrl;
            RestfulServerRouter.updateRouter();
        }
    };
    DebugService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [HttpAccountService, LoggerService, ActivatedRoute])
    ], DebugService);
    return DebugService;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/debug.service.js.map