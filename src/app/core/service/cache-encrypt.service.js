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
var cache_config_1 = require("../../shared/config/cache.config");
/**
 * 缓存加密服务，md5 和 aes加密
 * key==>md5  value==>aes
 * 在调试状态数据不加密
 *
 * 在发布状态数据加密
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
var CacheEncryptService = (function () {
    function CacheEncryptService() {
    }
    return CacheEncryptService;
}());
CacheEncryptService = __decorate([
    core_1.Injectable()
], CacheEncryptService);
exports.CacheEncryptService = CacheEncryptService;
//提供对象
function encryptServiceFactory() {
    if (environment_1.environment.production) {
        return new ProdCacheEncryptService(cache_config_1.cacheConfig.aesSecretKey);
    }
    else {
        return new DebugCacheEncryptService();
    }
}
exports.encryptServiceFactory = encryptServiceFactory;
//提供商
exports.cacheEncryptServiceProvider = {
    provide: CacheEncryptService,
    useFactory: encryptServiceFactory
};
//调试模式
var DebugCacheEncryptService = (function (_super) {
    __extends(DebugCacheEncryptService, _super);
    function DebugCacheEncryptService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugCacheEncryptService.prototype.md5Encode = function (value) {
        return JSON.stringify(value);
    };
    DebugCacheEncryptService.prototype.aesDecode = function (value) {
        return JSON.parse(value);
    };
    DebugCacheEncryptService.prototype.aesEncode = function (value) {
        return JSON.stringify(value);
    };
    return DebugCacheEncryptService;
}(CacheEncryptService));
DebugCacheEncryptService = __decorate([
    core_1.Injectable()
], DebugCacheEncryptService);
exports.DebugCacheEncryptService = DebugCacheEncryptService;
//发布模式
var ProdCacheEncryptService = (function (_super) {
    __extends(ProdCacheEncryptService, _super);
    function ProdCacheEncryptService(aesKey) {
        var _this = _super.call(this) || this;
        _this.aesKey = aesKey;
        return _this;
    }
    ProdCacheEncryptService.prototype.aesDecode = function (value) {
        var plainObj;
        try {
            var bytes = CryptoJS.AES.decrypt(value, this.aesKey);
            var plaintext = bytes.toString(CryptoJS.enc.Utf8);
            plainObj = JSON.parse(plaintext);
        }
        catch (e) {
            throw e;
        }
        return plainObj;
    };
    ProdCacheEncryptService.prototype.md5Encode = function (value) {
        var md5Value = CryptoJS.MD5(JSON.stringify(value));
        return md5Value + "";
    };
    ProdCacheEncryptService.prototype.aesEncode = function (value) {
        var cipherValue = CryptoJS.AES.encrypt(JSON.stringify(value), this.aesKey);
        return cipherValue + "";
    };
    return ProdCacheEncryptService;
}(CacheEncryptService));
ProdCacheEncryptService = __decorate([
    core_1.Injectable()
], ProdCacheEncryptService);
exports.ProdCacheEncryptService = ProdCacheEncryptService;
