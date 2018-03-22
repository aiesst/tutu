import {Http} from "@angular/http";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WeixinService} from "./core/weixin/weixin.service";
import {HttpAccountService} from "./core/account/account.service";
import {BrowserUtil} from "./core/util/browser.util";
import {WeixinLogin} from "./core/weixin/login.model";
import {LoggerService} from "./core/service/logger.service";
import {Injectable} from "@angular/core";
import {SimpleUtil} from "./core/util/simple.util";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import {WeixinConfig} from "./shared/config/weixin.config";
/**
 * 程序启动服务，用于决策程序运行条件
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */
@Injectable()
export class AppService {
    constructor(private logger: LoggerService,
                private wxService: WeixinService,
                private router: Router,
                private accountService: HttpAccountService) {
    }

    weixinLogin(): void {
        let wxLogin = this.wxService.getWeixinByUrlParams();

        if (!wxLogin.isEnable()) {
            //全局自动登陆
            this.accountService.autoLogin().subscribe(isLogin => {
                if (!isLogin) {
                    window.location.href = WeixinConfig.getDirectUrl();
                }
            });
        }
        //微信扫码登录
        else if (wxLogin.isLoginByQrcode()) {
            this.wxService.loginByQrcode(wxLogin)
                .subscribe(isLogin => {
                    this.accountService.autoLogin().subscribe(isLogin => {
                        if (!isLogin) {
                            window.location.href = WeixinConfig.getDirectUrl();
                        }
                    });
                });


        }
        else if (wxLogin.isLoginByDirect()) {

            this.wxService.loginByDirect(wxLogin)
                .subscribe(isLogin => {
                    if (!isLogin) {
                        alert("自动登录失败，请重新登录");
                        this.wxService.closeWeixinWindow();
                    }
                });
        }

    }


    // /**
    //  * 截取路由参数，自动登录
    //  */
    // autoLoginByWeixin(): void {
    //     let isLoginByQrcode: boolean = false;
    //     this.route.queryParams.map((params: Params) => {
    //         let code = params['code'];
    //         let state = params['state'];
    //         return new WeixinLogin(code, state);
    //     }).flatMap(wxLogin => {
    //         isLoginByQrcode = wxLogin.isLoginByQrcode();
    //         alert("进入登录");
    //         return this.wxService.getHttpAccount(wxLogin)
    //     }).subscribe(account => {
    //         this.httpAccountService.login(account).subscribe(isLogin => {
    //             alert("登录结果: " + isLogin);
    //             if (isLogin) {
    //                 if (isLoginByQrcode) {
    //                     alert("关闭页面")
    //                 }
    //             }
    //         })
    //     })
    // }
    //
    // /**
    //  * fixme
    //  * 微信登录决策，使用 route.queryParams 会出现 undefined 的bug
    //  * 暂时未找到解决方案，所以临时用 getQueryString 代替
    //  */
    // weixinLogin(): void {
    //     let wxLogin: WeixinLogin;
    //     let state = SimpleUtil.getQueryString("state");
    //     let code = SimpleUtil.getQueryString("code");
    //     wxLogin = new WeixinLogin(code, state);
    //     if (!wxLogin.isEnable()) {
    //         return;
    //     }
    //
    //
    //     this.wxService.getHttpAccount(wxLogin)
    //         .flatMap(account => {
    //             return this.httpAccountService.login(account)
    //         }).subscribe(isLogin => {
    //         if (isLogin) {
    //             if (wxLogin.isLoginByDirect()) {
    //                 //TODO 微信直接登录成功
    //             } else if (wxLogin.isLoginByQrcode()) {
    //                 //TODO 扫码登录成功
    //                 WeixinJSBridge.call('closeWindow');
    //             }
    //         }
    //     }, e => console.log("登录错误", e));
    // }


}

