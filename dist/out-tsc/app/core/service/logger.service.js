var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
/**
 * 日志服务，主要用于控制台输出，有需要在扩展
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export var LoggerService = (function () {
    function LoggerService() {
        this.log = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
        };
        this.error = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
        };
        this.warn = function (msg) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
        };
    }
    LoggerService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoggerService);
    return LoggerService;
}());
/**
 * 调试状态的日志服务，目前是直接调用的 console 等待更新
 * 比如引入 log4j 等
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
export var DebugLoggerService = (function (_super) {
    __extends(DebugLoggerService, _super);
    function DebugLoggerService() {
        _super.apply(this, arguments);
        this.log = console.log;
        this.error = console.error;
        this.warn = console.warn;
    }
    DebugLoggerService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], DebugLoggerService);
    return DebugLoggerService;
}(LoggerService));
/**
 * 用于发布用的日志服
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export var ProdLoggerService = (function (_super) {
    __extends(ProdLoggerService, _super);
    function ProdLoggerService() {
        _super.apply(this, arguments);
    }
    ProdLoggerService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProdLoggerService);
    return ProdLoggerService;
}(LoggerService));
/**
 * 工厂构造函数，注意一定要是 export function!!
 * 调试状态使用DebugLoggerService 发布状态使用 ProdLoggerService
 * @returns {LoggerService}
 */
export function loggerServiceFactory() {
    if (environment.production) {
        return new ProdLoggerService();
    }
    else {
        return new DebugLoggerService();
    }
}
//工厂提供商
export var loggerServiceProvider = {
    provide: LoggerService,
    useFactory: loggerServiceFactory,
    deps: []
};
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/service/logger.service.js.map