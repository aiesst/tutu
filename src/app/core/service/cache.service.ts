import {
    CacheService, CacheStorageAbstract, CacheSessionStorage, CacheMemoryStorage,
    CacheOptionsInterface, CacheLocalStorage
} from "ng2-cache";
import {Injectable, Optional} from "@angular/core";
import {LoggerService} from "./logger.service";
import {isNullOrUndefined} from "util";
import {CacheEncryptService} from "./cache-encrypt.service";
import {logger} from "codelyzer/util/logger";
import {cacheConfig} from "../../shared/config/cache.config";





/**
 * 自定义缓存服务，扩展自ng2-cache
 * https://github.com/Jackson88/ng2-cache
 * 会使用到 environment.ts 的cacheConfig 的一些配置，比如 aes 的加密key 等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */

export class TutuCacheService extends CacheService {

    constructor(storage: CacheStorageAbstract,
                private logger: LoggerService,
                private cacheEncrypt: CacheEncryptService) {
        super(storage);
        this.setGlobalPrefix(cacheConfig.prefix);
    }

    /**
     * 对缓存进行加密
     * @param key  进行了md5加密
     * @param value 进行了aes加密
     * @param options
     * @returns {boolean}
     */
    set(key: string, value: any, options?: CacheOptionsInterface): boolean {
        let md5Key = this.cacheEncrypt.md5Encode(key);
        let aesValue = this.cacheEncrypt.aesEncode(value);

        return super.set(md5Key, aesValue,options);
    }

    /**
     * 对缓存的数据进行解密
     * @param key
     * @returns {any}
     */
    get(key: string): any {
        let md5Key = this.cacheEncrypt.md5Encode(key);
        let aesValue = super.get(md5Key);
        if (isNullOrUndefined(aesValue)) {
            return null;
        }
        let plainObj: any;
        try {
            plainObj = this.cacheEncrypt.aesDecode(aesValue);
        } catch (e) {
            this.logger.error("解密缓存数据出错：" + e.toString());
            throw e;
        }
        return plainObj;
    }
}


//Session 缓存
@Injectable()
export class SessionCacheService extends TutuCacheService {
    constructor(logger: LoggerService, encryptService: CacheEncryptService) {
        super(new CacheSessionStorage(), logger, encryptService);
    }
}

//Local 缓存
@Injectable()
export class LocalCacheService extends TutuCacheService {
    constructor(logger: LoggerService, encryptService: CacheEncryptService) {
        super(new CacheLocalStorage(), logger, encryptService);
    }
}

//memory 缓存
@Injectable()
export class MemoryCacheService extends TutuCacheService {
    constructor(logger: LoggerService, encryptService: CacheEncryptService) {
        super(new CacheMemoryStorage(), logger, encryptService);
    }
}


