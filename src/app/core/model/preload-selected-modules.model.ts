import {Injectable} from "@angular/core";
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs";
import {LoggerService} from "../service/logger.service";
import {logger} from "codelyzer/util/logger";
import {WeixinConfig} from "../../shared/config/weixin.config";
import {BrowserUtil} from "../util/browser.util";

/**
 * 自定义的预加载策略：
 * example
 * 1. app-routing.module.ts
 * {
      path: 'test',
      loadChildren: 'app/test/test.module#TestModule',
      data: {
        preload: true
    }
    2. test-routing.module.ts
    {
      path: '',
      component: TestComponent
    }
    3. 从app.module.ts中的imports中删除 TestModule
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-10
 * @version    : v1.0
 */

@Injectable()
export class PreloadSelectedModules implements PreloadingStrategy {

    constructor(private logger: LoggerService) {

    }

    preloadedModules: string[] = [];

    preload(route: Route, load: Function): Observable<any> {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        } else {
            return Observable.of(null);
        }
    }
}
