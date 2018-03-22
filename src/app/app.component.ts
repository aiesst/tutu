import {Component, HostBinding, OnInit, AfterViewInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppService} from "./app.service";
import {BrowserUtil} from "./core/util/browser.util";
import {ActivatedRoute, Params} from "@angular/router";
import {isNullOrUndefined} from "util";
import {WeixinLogin} from "./core/weixin/login.model";
import {SimpleUtil} from "./core/util/simple.util";


/**
 * 根组件，程序的入口组件，用于决策程序启动策略，比如截取路由参数自动登录等等
 * 只有这个组件允许 providers 其它组件的providers应该在顶层routing模块里面
 * 设置
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    ngOnInit(): void {


    }

    @HostBinding('class') public bodyClass = '';

    constructor(private titleService: Title,
                private route: ActivatedRoute,
                private  appService: AppService,
    ){        this.titleService.setTitle("途徒");
        //微信浏览器自动登录


    }


}
