import {LoggerService} from "../core/service/logger.service";
import {WeixinService} from "../core/weixin/weixin.service";
import {Injectable} from "@angular/core";
import {WeixinLogin} from "../core/weixin/login.model";
import {LocalCacheService, SessionCacheService} from "../core/service/cache.service";
import {Base64Util} from "../core/util/base64.util";
import {HttpAccountService} from "../core/account/account.service";
import {Http, URLSearchParams} from "@angular/http";
import {RestfulServerRouter} from "../shared/config/http/http-router.config";
import {RxService} from "../core/service/rx-service";
import {isNullOrUndefined} from "util";
import {TravelBooking, ContactUs} from "./home.model";
import {Observable} from "rxjs";

@Injectable()
export class HomeService {
    static readonly cacheKeyPrefix = "home_service_";
    static readonly CacheKeyHttpToken = HomeService.cacheKeyPrefix + "http_token";

    constructor(private logger: LoggerService,
                private wxService: WeixinService,
                private httpAccountService: HttpAccountService,
                private http: Http,
                private rxService: RxService) {

    }


    getHttpAccountName(): string {
        let account =  this.httpAccountService.getHttpAccount();
        if(isNullOrUndefined(account)){
            return null;
        }
        return  account.weiXinName || account.nickName;
    }


    submitTravelBooking(tb: TravelBooking): Observable<boolean> {
        let str = JSON.stringify(tb);
        return this.rxService.makeObservable(observer => {
            this.http.post(RestfulServerRouter.travelBooking, {str}).map(this.rxService.httpSignalDataMap).subscribe(data => {
                observer.next(true);
                observer.complete();
            }, error => {
                observer.next(false);
                observer.complete();
            })
        })

    }

    submitContactUs(contact:ContactUs):Observable<boolean>{
        let postStr = JSON.stringify(contact);
        return this.rxService.makeObservable(observer=>{
            this.http.post(RestfulServerRouter.contactUs,{postStr}).map(this.rxService.httpSignalDataMap).subscribe(data=>{
                observer.next(true);
                observer.complete();
            },error=>{
                this.logger.error(error);
                observer.next(false);
                observer.complete();
            })
        })

    }


    /**
     * 通过微信登录
     * @param wxLogin 微信登录模型
     */
    loginByWeixin(wxLogin: WeixinLogin) {
        this.wxService.getHttpAccount(wxLogin).subscribe(httpAccount => {
                //登录成功
                if (this.httpAccountService.login(httpAccount)) {
                    this.logger.log("登录成功");
                } else {
                    this.logger.log("登录失败");
                }
            },
            error => this.logger.error(error)
        );

    }

    testAutoLogin() {


    }


}

