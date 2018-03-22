import {LoggerService} from "../service/logger.service";
import {WeixinLogin} from "./login.model";
import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {RxService} from "../service/rx-service";
import {Http, URLSearchParams} from "@angular/http";
import {RestfulServerRouter} from "../../shared/config/http/http-router.config";
import {HttpAccount} from "../account/account.model";
import {isNullOrUndefined} from "util";
import {SimpleUtil} from "../util/simple.util";
import {HttpAccountService} from "../account/account.service";

/**
 * 微信接入服务
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
@Injectable()
export class WeixinService {
    constructor(private logger: LoggerService,
                private rxService: RxService,
                private http: Http,
                private httpAccountService: HttpAccountService) {

    }


    /**
     * 通过微信的回调登录获取用户数据
     * @param login  回调数据
     * @returns {Observable<T>}
     */
    getHttpAccount(login: WeixinLogin): Observable<HttpAccount> {

        return this.rxService.makeObservable<HttpAccount>((observer: Observer<HttpAccount>) => {
            let params: URLSearchParams = new URLSearchParams();
            params.set("code", login.code);
            params.set("state", login.state);
            // alert("code: "+login.code);
            // alert("state: "+login.state);

            this.http.get(RestfulServerRouter.getHttpAccountByWeixin, {search: params})
                .map(this.rxService.httpSignalDataMap)
                .subscribe(observer);
        })

    }


    /**
     * 通过Url的参数生成微信登录模型
     * @returns {WeixinLogin}
     */
    getWeixinByUrlParams(): WeixinLogin {
        let wxLogin: WeixinLogin;
        let state = SimpleUtil.getQueryString("state");
        let code = SimpleUtil.getQueryString("code");
        wxLogin = new WeixinLogin(code, state);
        return wxLogin;
    }

    /**
     * 通过扫码登录，这时只有电脑一方在线，此时应该关闭微信浏览器
     * @param wxLogin
     * @returns {Observable<R>}
     */
    loginByQrcode(wxLogin: WeixinLogin): Observable<boolean> {

        return this.getHttpAccount(wxLogin).map(account => {
            return !isNullOrUndefined(account);

        })

    }

    /**
     * 微信直接登录
     * @param wxLogin
     * @returns {any}
     */
    loginByDirect(wxLogin: WeixinLogin): Observable<boolean> {
        return this.getHttpAccount(wxLogin)
            .switchMap(account => this.httpAccountService.login(account));
    }

    /**
     * 关闭微信浏览器窗口
     */
    closeWeixinWindow(): void {
        try {
            WeixinJSBridge.call('closeWindow');

        } catch (e) {

        }
    }
}
