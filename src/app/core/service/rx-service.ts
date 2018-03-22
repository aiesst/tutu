import {Observable, Observer} from "rxjs";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {HttpResult, HttpCode} from "../model/http-result.model";
import {LoggerService} from "./logger.service";
import {logger} from "codelyzer/util/logger";

/**
 * 统一处理RxJs的操作
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
@Injectable()
export class RxService {
    constructor() {

    }

    //默认超时时间20000 毫秒
     readonly defaultTimeout = 20000;

    /**
     * 创建一个Observable，并设置默认超时
     * @param observer
     * @returns {any}
     */
    makeObservable<T>(observer: Function): Observable<T> {
        return Observable.create(observer).timeout(this.defaultTimeout);
    }


    /**
     * 默认的超时设置
     * @param observable
     * @returns {Observable<T>}
     */
    defaultTimeoutFlatMap<T>(observable: Observable<T>): Observable<T> {
        return observable.timeout(this.defaultTimeout);
    }


    /**
     * 对服务器返回的数据进行转换，将错误进行统一拦截
     * todo 不知道为什么不能用 LoggerService
     * @param res  服务器响应数据
     * @returns {Array<T>}  有效的数据
     */
    httpMultiDataMap<T>(res: Response): Array<T> {

        let result: HttpResult<T> = res.json();
        let data: Array<T> = result.data;
        let msg: string = result.resultMsg;
        let code: number = result.resultCode;
        if (code != HttpCode.ok) {
            throw new Error("服务器返回错误代码：" + code + "\n错误消息：" + msg);
        }
        return data;
    }

    httpResultMap<T>(res: Response): HttpResult<T> {
        return res.json();
    }


    /**
     * 服务器返回有效数据只有一个的情况，不知道为什么在里面不能调用
     * TODO this.httpMultiDataMap 会报错，所以暂时复制过来了
     * @param res
     * @returns {T}
     */
    httpSignalDataMap<T>(res: Response): T {
        let result: HttpResult<T> = res.json();
        let data: Array<T> = result.data;
        let msg: string = result.resultMsg;
        let code: number = result.resultCode;

        if (code != HttpCode.ok) {
            throw new Error("服务器返回错误代码：" + code + "\n错误消息：" + msg);
        }
        return data[0];
    }


}
