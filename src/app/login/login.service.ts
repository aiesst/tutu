import {Http} from "@angular/http";
import {LoggerService} from "../core/service/logger.service";
import {RxService} from "../core/service/rx-service";
import {HttpResult} from "../core/model/http-result.model";
import {WSocketData} from "./model/websocket.model";
import {RestfulServerRouter} from "../shared/config/http/http-router.config";
import {HttpAccount} from "../core/account/account.model";
import {isNullOrUndefined} from "util";
import {HttpAccountService} from "../core/account/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {LoginConfig} from "../shared/config/login.conf";

@Injectable()
export class LoginService {
    constructor(private http: Http,
                private logger: LoggerService,
                private rxService: RxService,
                private httpAccountService: HttpAccountService,
                private router: Router) {


    }

    private socket: WebSocket;
    private qrcodeId: string;
    private wsCloseHandler: (event: CloseEvent) => void;
    private wsOpenHandler: (event: Event) => void;
    private wsErrorHandler: (event: ErrorEvent) => void;
    private loginFailedHandler: () => void;


    setLoginFailed(handler: () => void) {
        this.loginFailedHandler = handler;
    }

    setWsErrorHandler(handler: (event: ErrorEvent) => void) {
        this.wsErrorHandler = handler;
    }

    setWsCloseHandler(handler: (event: CloseEvent) => void) {
        this.wsCloseHandler = handler;

    }

    setWsOpenHandler(handler: (event: Event) => void) {
        this.wsOpenHandler = handler;
    }

    setQrcodeId(id: string): void {
        if (id.startsWith("#")) {
            this.qrcodeId = id;
        } else {
            this.qrcodeId = "#" + id;
        }
    }

    initWebSocket(): void {
        this.socket = new WebSocket(RestfulServerRouter.wsLogin);
        this.socket.onopen = event => {
            this.logger.log("连接Websocket成功");
            if (!isNullOrUndefined(this.wsOpenHandler)) {
                this.wsOpenHandler(event);
            }
        };

        this.socket.onclose = event => {
            this.logger.log("WebSocket已经关闭");
            if (!isNullOrUndefined(this.wsCloseHandler)) {
                this.wsCloseHandler(event);
            }
        };

        this.socket.onmessage = event => {
            let wsocketData: HttpResult<WSocketData> = JSON.parse(event.data);
            this.wsMessageHandler(wsocketData);
        };

        this.socket.onerror = error => {
            this.logger.error(error);
            if (!isNullOrUndefined(this.wsErrorHandler)) {
                this.wsErrorHandler(error);
            }
        }


    }

    closeWebSocket(): void {
        this.socket.close();
    }


    refreshWebsocket(): void {
        this.logger.log("准备重连");
        this.initWebSocket();
    }

    /**
     * websocket 数据处理
     * @param wsocketData
     */
    private wsMessageHandler(wsocketData: HttpResult<WSocketData>): void {
        this.logger.log("接受到的数据", wsocketData);
        let data = wsocketData.data[0];
        try {
            if (data.type) {

            }
        } catch (e) {
            return;
        }
        switch (data.type) {
            //等待用户扫描
            case WSocketData.weixinQrcodeType:
                let qrcodeUrl = WSocketData.getWeixinUrl(data.wxState);
                this.logger.log("callbackUrl", qrcodeUrl);
                //生成微信扫码登录二维码
                if (!isNullOrUndefined(qrcodeUrl)) {
                    $(this.qrcodeId).qrcode({
                        width: LoginConfig.qrCodeWidth,
                        height: LoginConfig.qrCodeHeight,
                        text: qrcodeUrl
                    });
                } else {
                    this.logger.log("获取到的登录数据有问题数据：", data);
                }
                break;

            //用户已经扫码进入登录
            case WSocketData.userTokenType:
                this.logger.log("扫描成功", data);
                let httpAccount: HttpAccount = new HttpAccount(data.userName, data.userToken, +data.expire);
                httpAccount.weiXinName = data.nickName;
                this.httpAccountService.login(httpAccount).subscribe(isLogin => {
                    //登陆成功
                    if (isLogin) {
                        this.router.navigate([this.httpAccountService.redirectUrl]);
                        this.socket.close();
                        //登陆失败
                    } else {
                        this.logger.log("登陆失败");
                        if (!isNullOrUndefined(this.loginFailedHandler)) {
                            this.loginFailedHandler();
                        }
                    }
                });

                break;

            default:
                break

        }
    }
}