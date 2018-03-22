import {HttpAccountService} from "./account/account.service"
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpAccount} from "./account/account.model";
import {LoggerService} from "./service/logger.service";
import {RestfulServerRouter} from "../shared/config/http/http-router.config";
import {WeixinLogin} from "./weixin/login.model";
import {Params, ActivatedRoute} from "@angular/router";
import {isNullOrUndefined} from "util";
@Injectable()
export class DebugService {
    constructor(private accountService: HttpAccountService,
                private logger: LoggerService,
                private route: ActivatedRoute) {

    }


    startDebug(): void {
        //调试设置
        if (!environment.production) {
            this.logger.log("------------------------开启调试模式--------------------------");
            //登陆测试账号

            // this.accountService.login(new HttpAccount("hello", "world", HttpAccount.infinityExpire));
            //调试服务器
            RestfulServerRouter.baseUrl = RestfulServerRouter.localBaseUrl;
            RestfulServerRouter.updateRouter();

        }
    }

}