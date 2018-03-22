"use strict";
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
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
/**
 * 日志服务，主要用于控制台输出，有需要在扩展
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
var LoggerService = (function () {
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
    return LoggerService;
}());
LoggerService = __decorate([
    core_1.Injectable()
], LoggerService);
exports.LoggerService = LoggerService;
/**
 * 调试状态的日志服务，目前是直接调用的 console 等待更新
 * 比如引入 log4j 等
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
var DebugLoggerService = (function (_super) {
    __extends(DebugLoggerService, _super);
    function DebugLoggerService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.log = console.log;
        _this.error = console.error;
        _this.warn = console.warn;
        return _this;
    }
    return DebugLoggerService;
}(LoggerService));
DebugLoggerService = __decorate([
    core_1.Injectable()
], DebugLoggerService);
exports.DebugLoggerService = DebugLoggerService;
/**
 * 用于发布用的日志服
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
var ProdLoggerService = (function (_super) {
    __extends(ProdLoggerService, _super);
    function ProdLoggerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProdLoggerService;
}(LoggerService));
ProdLoggerService = __decorate([
    core_1.Injectable()
], ProdLoggerService);
exports.ProdLoggerService = ProdLoggerService;
/**
 * 工厂构造函数，注意一定要是 export function!!
 * 调试状态使用DebugLoggerService 发布状态使用 ProdLoggerService
 * @returns {LoggerService}
 */
function loggerServiceFactory() {
    if (environment_1.environment.production) {
        return new ProdLoggerService();
    }
    else {
        return new DebugLoggerService();
    }
}
exports.loggerServiceFactory = loggerServiceFactory;
//工厂提供商
exports.loggerServiceProvider = {
    provide: LoggerService,
    useFactory: loggerServiceFactory,
    deps: []
};
