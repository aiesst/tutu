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
import { Http } from "@angular/http";
import { RestfulServerRouter } from "../../shared/config/http/http-router.config";
import { RxService } from "./rx-service";
import { LoggerService } from "./logger.service";
import { MemoryCacheService } from "./cache.service";
import { isNullOrUndefined } from "util";
/**
 * Oss 服务模块，从服务器获取接入 Oss 的凭证等等，RxService 是全局提供的
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export var OssService = (function () {
    /**
     * 要先注入LoggerService等依赖的依赖
     * @param http
     * @param rxService
     * @param memoryCacheService
     * @param logger
     */
    function OssService(http, logger, rxService, memoryCacheService) {
        this.http = http;
        this.logger = logger;
        this.rxService = rxService;
        this.memoryCacheService = memoryCacheService;
    }
    /**.
     *
     * 获取接入Oss的参数，通过内存缓存
     * @param phoneNumber  手机号
     * @returns {Observable<R>} 接入凭据
     */
    OssService.prototype.getOssAccessParam = function (phoneNumber) {
        var _this = this;
        return this.rxService.makeObservable(function (observer) {
            var cachedOssAccessParam = _this.memoryCacheService.get(OssService.cacheKeyOssAccessParam);
            //对数据进行缓存
            if (!isNullOrUndefined(cachedOssAccessParam)) {
                observer.next(cachedOssAccessParam);
                observer.complete();
            }
            else {
                _this.http.get(RestfulServerRouter.getOssAccessParam + "?id=" + phoneNumber)
                    .map(_this.rxService.httpSignalDataMap)
                    .do(function (param) {
                    var expires = (+param.expire) * 1000;
                    _this.memoryCacheService.set(OssService.cacheKeyOssAccessParam, param, { expires: expires });
                }).subscribe(observer);
            }
        });
    };
    OssService.cacheKeyPrefix = "oss_service_";
    OssService.cacheKeyOssAccessParam = OssService.cacheKeyPrefix + "access_oss_param";
    OssService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, LoggerService, RxService, MemoryCacheService])
    ], OssService);
    return OssService;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/core/service/oss.service.js.map