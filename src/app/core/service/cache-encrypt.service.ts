import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {cacheConfig} from "../../shared/config/cache.config";


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
@Injectable()
export abstract class CacheEncryptService {


    abstract aesEncode(value: any): string;


    abstract aesDecode(value: string): any;


    abstract md5Encode(value: any): string;
}

//提供对象
export function encryptServiceFactory(): CacheEncryptService {
    if (environment.production) {
        return new ProdCacheEncryptService(cacheConfig.aesSecretKey);
    } else {
        return new DebugCacheEncryptService();
    }


}


//提供商
export let cacheEncryptServiceProvider = {
    provide: CacheEncryptService,
    useFactory: encryptServiceFactory
};

//调试模式
@Injectable()
export class DebugCacheEncryptService extends CacheEncryptService {


    md5Encode(value: any): string {
        return JSON.stringify(value);

    }

    aesDecode(value: string): any {
        return JSON.parse(value);
    }

    aesEncode(value: any): string {
        return JSON.stringify(value);
    }


}


//发布模式
@Injectable()
export class ProdCacheEncryptService extends CacheEncryptService {

    constructor(private aesKey: string) {
        super();
    }

    aesDecode(value: string): any {
        let plainObj: any;
        try {
            let bytes = CryptoJS.AES.decrypt(value, this.aesKey);
            let plaintext = bytes.toString(CryptoJS.enc.Utf8);
            plainObj = JSON.parse(plaintext);
        } catch (e) {
            throw e;
        }
        return plainObj;
    }

    md5Encode(value: any): string {
        let md5Value = CryptoJS.MD5(JSON.stringify(value));
        return md5Value + "";
    }

    aesEncode(value: any): string {
        let cipherValue = CryptoJS.AES.encrypt(JSON.stringify(value), this.aesKey);
        return cipherValue + "";
    }


}