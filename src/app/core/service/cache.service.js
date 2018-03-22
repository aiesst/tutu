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
var ng2_cache_1 = require("ng2-cache");
var core_1 = require("@angular/core");
var util_1 = require("util");
var cache_config_1 = require("../../shared/config/cache.config");
/**
 * 自定义缓存服务，扩展自ng2-cache
 * https://github.com/Jackson88/ng2-cache
 * 会使用到 environment.ts 的cacheConfig 的一些配置，比如 aes 的加密key 等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
var TutuCacheService = (function (_super) {
    __extends(TutuCacheService, _super);
    function TutuCacheService(storage, logger, cacheEncrypt) {
        var _this = _super.call(this, storage) || this;
        _this.logger = logger;
        _this.cacheEncrypt = cacheEncrypt;
        _this.setGlobalPrefix(cache_config_1.cacheConfig.prefix);
        return _this;
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
        if (util_1.isNullOrUndefined(aesValue)) {
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
}(ng2_cache_1.CacheService));
exports.TutuCacheService = TutuCacheService;
//Session 缓存
var SessionCacheService = (function (_super) {
    __extends(SessionCacheService, _super);
    function SessionCacheService(logger, encryptService) {
        return _super.call(this, new ng2_cache_1.CacheSessionStorage(), logger, encryptService) || this;
    }
    return SessionCacheService;
}(TutuCacheService));
SessionCacheService = __decorate([
    core_1.Injectable()
], SessionCacheService);
exports.SessionCacheService = SessionCacheService;
//Local 缓存
var LocalCacheService = (function (_super) {
    __extends(LocalCacheService, _super);
    function LocalCacheService(logger, encryptService) {
        return _super.call(this, new ng2_cache_1.CacheLocalStorage(), logger, encryptService) || this;
    }
    return LocalCacheService;
}(TutuCacheService));
LocalCacheService = __decorate([
    core_1.Injectable()
], LocalCacheService);
exports.LocalCacheService = LocalCacheService;
//memory 缓存
var MemoryCacheService = (function (_super) {
    __extends(MemoryCacheService, _super);
    function MemoryCacheService(logger, encryptService) {
        return _super.call(this, new ng2_cache_1.CacheMemoryStorage(), logger, encryptService) || this;
    }
    return MemoryCacheService;
}(TutuCacheService));
MemoryCacheService = __decorate([
    core_1.Injectable()
], MemoryCacheService);
exports.MemoryCacheService = MemoryCacheService;
