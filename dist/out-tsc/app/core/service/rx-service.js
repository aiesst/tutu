var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpCode } from "../model/http-result.model";
/**
 * 统一处理RxJs的操作
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
export var RxService = (function () {
    function RxService() {
        //默认超时时间20000 毫秒
        this.defaultTimeout = 20000;
    }
    /**
     * 创建一个Observable，并设置默认超时
     * @param observer
     * @returns {any}
     */
    RxService.prototype.makeObservable = function (observer) {
        return Observable.create(observer).timeout(this.defaultTimeout);
    };
    /**
     * 默认的超时设置
     * @param observable
     * @returns {Observable<T>}
     */
    RxService.prototype.defaultTimeoutFlatMap = function (observable) {
        return observable.timeout(this.defaultTimeout);
    };
    /**
     * 对服务器返回的数据进行转换，将错误进行统一拦截
     * todo 不知道为什么不能用 LoggerService
     * @param res  服务器响应数据
     * @returns {Array<T>}  有效的数据
     */
    RxService.prototype.httpMultiDataMap = function (res) {
        var result = res.json();
        var data = result.data;
        var msg = result.resultMsg;
        var code = result.resultCode;
        if (code != HttpCode.ok) {
            throw new Error("服务器返回错误代码：" + code + "\n错误消息：" + msg);
        }
        return data;
    };
    RxService.prototype.httpResultMap = function (res) {
        return res.json();
    };
    /**
     * 服务器返回有效数据只有一个的情况，不知道为什么在里面不能调用
     * TODO this.httpMultiDataMap 会报错，所以暂时复制过来了
     * @param res
     * @returns {T}
     */
    RxService.prototype.httpSignalDataMap = function (res) {
        var result = res.json();
        var data = result.data;
        var msg = result.resultMsg;
        var code = result.resultCode;
        if (code != HttpCode.ok) {
            throw new Error("服务器返回错误代码：" + code + "\n错误消息：" + msg);
        }
        return data[0];
    };
    RxService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], RxService);
    return RxService;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/service/rx-service.js.map