import {Injectable} from "@angular/core";
import {HttpAccount} from "./account.model";
import {LoggerService} from "../service/logger.service";
import {LocalCacheService} from "../service/cache.service";
import {TuTuRequestOptions} from "../../shared/config/http/http-option.config";
import {RxService} from "../service/rx-service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";
import {Base64Util} from "../util/base64.util";
import {RestfulServerRouter} from "../../shared/config/http/http-router.config";

/**
 * 保存用户信息，生成保存token 和设置全局的http header
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-18
 * @version    : v1.0
 */
@Injectable()
export class HttpAccountService {


    static readonly CacheKeyPrefix = "http_account_service";
    static readonly CacheKeyHttpAccount = HttpAccountService.CacheKeyPrefix + "_http_account";
    private account: HttpAccount;  //用户账号

    //用于路由守卫(需要同步数据)
    isAccountLogin: boolean = false;
    private _redirectUrl: string;

    get redirectUrl(): string {
        if(isNullOrUndefined(this._redirectUrl)){
            return "";
        }
        return this._redirectUrl;
    }

    set redirectUrl(url: string) {
        this._redirectUrl = url;
    }

    constructor(private logger: LoggerService,
                private localCache: LocalCacheService,
                private requestOptions: TuTuRequestOptions,
                private rxService: RxService,
                private http: Http,
                private router: Router) {


    }

    /**
     * 登录，主要实现对Http Basic Auth 的添加
     * TODO 还未添加登录验证
     * @param account 账户
     */
    login(account: HttpAccount): Observable<boolean> {
        this.setHttpAccount(account);
        return this.refreshLogin();

    }

    /**
     * 自动登录服务器，从缓存中读取账户，即设置http header 的basic guard
     * @returns {boolean}
     */
    autoLogin(): Observable<boolean> {
        return this.login(this.getHttpAccountFromCache());
    }

    /**
     * 该设置会影响到全局的认证
     * @param account
     */
    private setHttpAccount(account: HttpAccount) {
        if (isNullOrUndefined(account)) {
            return;
        }
        try {
            this.account = account;
            let base64token: string = HttpAccountService.generateAuth(account.userName, account.userToken);
            this.requestOptions.setHeader("Authorization", base64token);
            this.logger.log("已经设置了访问头部", this.requestOptions);
            this.localCache.set(HttpAccountService.CacheKeyHttpAccount, account, {expires:HttpAccount.expireMs(account)});
        } catch (e) {
            this.logger.error("异常 httpAccountService",e);
            throw e;
        }

    }

    getHttpAccount(): HttpAccount {
        if (!isNullOrUndefined(this.account)) {
            return this.account;
        } else {
            this.account = this.getHttpAccountFromCache();
            return this.account;
        }
    }

    /**
     * 从缓存中获取账户
     * @returns {any}
     */
    private getHttpAccountFromCache(): HttpAccount {
        try {
            return this.localCache.get(HttpAccountService.CacheKeyHttpAccount);
        }catch(e){
            return null;
        }
    }

    /**
     * 注销清空数据
     */
    logout() {
        this.account = null;
        this.isAccountLogin = false;
        this.localCache.remove(HttpAccountService.CacheKeyHttpAccount);
        this.requestOptions.deleteHeader("Authorization");

    }


    /**
     * 检查是否登录过
     * @returns {boolean}
     */
    canLogin(): boolean {
        return !isNullOrUndefined(this.getHttpAccount());
    }

    /**
     * 检查是否登陆，通过请求服务器来捕获异常实现
     */
    refreshLogin(): Observable<boolean> {
        return this.rxService.makeObservable(observer => {
            this.http.get(RestfulServerRouter.checkIsLogin).map(this.rxService.httpResultMap).subscribe(data => {
                this.isAccountLogin = true;
                observer.next(true);
                observer.complete();
            }, error => {
                this.logger.log("登陆错误", error);
                //注销之前保存的数据
                this.logout();
                observer.next(false);
                observer.complete();

            })
        });
    }


    /**
     * 生成 Authorization Header
     * @param userName
     * @param userToken
     * @returns {string}
     */
    static generateAuth(userName: string, userToken: string): string {

        let plainToken = userName + ":" + userToken;
        let base64Token = "Basic " + Base64Util.base64Encode(plainToken);
        return base64Token;
    }


}