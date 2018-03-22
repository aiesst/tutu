import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {OSSAccessParam} from "../model/oss-access-param.model";
import {Observable, Subscriber, Observer} from "rxjs";
import {RestfulServerRouter} from "../../shared/config/http/http-router.config";
import {RxService} from "./rx-service";
import {CacheService} from "ng2-cache";
import {LoggerService} from "./logger.service";
import {LocalCacheService, MemoryCacheService, SessionCacheService} from "./cache.service";
import {isNullOrUndefined} from "util";


/**
 * Oss 服务模块，从服务器获取接入 Oss 的凭证等等，RxService 是全局提供的
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */

@Injectable()
export class OssService {

    static readonly cacheKeyPrefix = "oss_service_";

    static readonly cacheKeyOssAccessParam = OssService.cacheKeyPrefix + "access_oss_param";


    /**
     * 要先注入LoggerService等依赖的依赖
     * @param http
     * @param rxService
     * @param memoryCacheService
     * @param logger
     */
    constructor(private http: Http,
                private logger: LoggerService,
                private rxService: RxService,
                private memoryCacheService: MemoryCacheService,) {


    }


    /**.
     *
     * 获取接入Oss的参数，通过内存缓存
     * @param phoneNumber  手机号
     * @returns {Observable<R>} 接入凭据
     */
    getOssAccessParam(phoneNumber: string): Observable<OSSAccessParam> {

        return this.rxService.makeObservable((observer: Observer<OSSAccessParam>) => {
            let cachedOssAccessParam: OSSAccessParam = this.memoryCacheService.get(OssService.cacheKeyOssAccessParam);
            //对数据进行缓存
            if (!isNullOrUndefined(cachedOssAccessParam)) {
                observer.next(cachedOssAccessParam);
                observer.complete();
                //从服务器拉取数据
            } else {
                this.http.get(RestfulServerRouter.getOssAccessParam + "?id=" + phoneNumber)
                    .map(this.rxService.httpSignalDataMap)
                    //缓存数据
                    .do((param: OSSAccessParam) => {
                        let expires = (+param.expire) * 1000;
                        this.memoryCacheService.set(OssService.cacheKeyOssAccessParam, param, {expires: expires});

                    }).subscribe(observer);
            }
        });


    }


}
