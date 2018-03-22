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
import { CacheService, CacheSessionStorage, CacheMemoryStorage, CacheLocalStorage } from "ng2-cache";
import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { isNullOrUndefined } from "util";
import { CacheEncryptService } from "./cache-encrypt.service";
import { cacheConfig } from "../../shared/config/cache.config";
/**
 * 自定义缓存服务，扩展自ng2-cache
 * https://github.com/Jackson88/ng2-cache
 * 会使用到 environment.ts 的cacheConfig 的一些配置，比如 aes 的加密key 等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
export var TutuCacheService = (function (_super) {
    __extends(TutuCacheService, _super);
    function TutuCacheService(storage, logger, cacheEncrypt) {
        _super.call(this, storage);
        this.logger = logger;
        this.cacheEncrypt = cacheEncrypt;
        this.setGlobalPrefix(cacheConfig.prefix);
    }
    /**
     * 对缓存进行加密
     * @param key  进行了md5加密
     * @param value 进行了aes加密
     * @param options
     * @returns {boolean}
     */
    TutuCacheService.prototype.set = function (key, value, options) {
        var md5Key = this.cacheEncrypt.md5Encode(key);
        var aesValue = this.cacheEncrypt.aesEncode(value);
        return _super.prototype.set.call(this, md5Key, aesValue, options);
    };
    /**
     * 对缓存的数据进行解密
     * @param key
     * @returns {any}
     */
    TutuCacheService.prototype.get = function (key) {
        var md5Key = this.cacheEncrypt.md5Encode(key);
        var aesValue = _super.prototype.get.call(this, md5Key);
        if (isNullOrUndefined(aesValue)) {
            return null;
        }
        var plainObj;
        try {
            plainObj = this.cacheEncrypt.aesDecode(aesValue);
        }
        catch (e) {
            this.logger.error("解密缓存数据出错：" + e.toString());
            throw e;
        }
        return plainObj;
    };
    return TutuCacheService;
}(CacheService));
//Session 缓存
export var SessionCacheService = (function (_super) {
    __extends(SessionCacheService, _super);
    function SessionCacheService(logger, encryptService) {
        _super.call(this, new CacheSessionStorage(), logger, encryptService);
    }
    SessionCacheService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService, CacheEncryptService])
    ], SessionCacheService);
    return SessionCacheService;
}(TutuCacheService));
//Local 缓存
export var LocalCacheService = (function (_super) {
    __extends(LocalCacheService, _super);
    function LocalCacheService(logger, encryptService) {
        _super.call(this, new CacheLocalStorage(), logger, encryptService);
    }
    LocalCacheService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService, CacheEncryptService])
    ], LocalCacheService);
    return LocalCacheService;
}(TutuCacheService));
//memory 缓存
export var MemoryCacheService = (function (_super) {
    __extends(MemoryCacheService, _super);
    function MemoryCacheService(logger, encryptService) {
        _super.call(this, new CacheMemoryStorage(), logger, encryptService);
    }
    MemoryCacheService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService, CacheEncryptService])
    ], MemoryCacheService);
    return MemoryCacheService;
}(TutuCacheService));
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/service/cache.service.js.map