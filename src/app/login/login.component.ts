import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {PageService} from "../core/service/page.service";
import {RestfulServerRouter} from "../shared/config/http/http-router.config";
import {LoggerService} from "../core/service/logger.service";
import {Observable, Observer} from "rxjs";
import {WSocketData} from "./model/websocket.model";
import {HttpResult} from "../core/model/http-result.model";
import {isNullOrUndefined} from "util";
import QrcodeMode = JQueryQRCode.QrcodeMode;
import {HttpAccountService} from "../core/account/account.service";
import {HttpAccount} from "../core/account/account.model";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit,OnDestroy {

    constructor(private  pageService: PageService,
                private logger: LoggerService,
                private loginService: LoginService) {

    }

    private readonly login_qrcode_id = "#login_qrcode";

    ngOnInit() {
        this.pageService.setBackground("home1.jpg")

    }


    refreshQrcode() {
        this.logger.log("刷新二维码");
        //$(this.login_qrcode_id).hide(1000);
        // this.loginService.refreshWebsocket();
    }

    ngOnDestroy(): void {
        this.loginService.closeWebSocket();
        this.pageService.clearBackground();
    }

    ngAfterViewInit(): void {
        this.loginService.initWebSocket();
        this.loginService.setQrcodeId("login_qrcode");
        this.loginService.setWsCloseHandler(event => {
            //TODO 提醒用户刷新
        })

    }


    switchLoginMethod(type: number): void {
        switch (type) {
            case 1:
                $("#login-count").css("cssText", "display:block !important;");
                $("#login-weixin").css("cssText", "display:none !important;");
                break;
            case 2:
                $("#login-count").css("cssText", "display:none !important;");
                $("#login-weixin").css("cssText", "display:block !important;");
                break;
        }

    }


}
