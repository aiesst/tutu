import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestfulServerRouter} from "../shared/config/http/http-router.config";
import {LoggerService} from "../core/service/logger.service";

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

    /// 注入路由管理
    constructor(private route: ActivatedRoute, private logger: LoggerService) {
    }

    ngOnInit() {

        let ws = new WebSocket(RestfulServerRouter.wsLogin);
        ws.onopen = e=>{
            this.logger.log("打开连接",e);
            ws.send("hello world");

        };
        ws.onmessage = m =>{
            this.logger.log("接收到消息：",m);
        };
        ws.onerror = e=>{
            this.logger.error(e);
        };
        ws.onclose = c=>{
            this.logger.log("关闭连接")
        };

    }

    testWxLogin() {

    }

}
