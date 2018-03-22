import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

/**
 * 日志服务，主要用于控制台输出，有需要在扩展
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
@Injectable()
export class LoggerService {
    log = (msg: any,...optionalParams: any[]) => {
    };
    error = (msg: any,...optionalParams: any[]) => {
    };
    warn = (msg: any,...optionalParams: any[]) => {
    };
}


/**
 * 调试状态的日志服务，目前是直接调用的 console 等待更新
 * 比如引入 log4j 等
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
@Injectable()
export class DebugLoggerService extends LoggerService {
    log = console.log;
    error = console.error;
    warn = console.warn;

}

/**
 * 用于发布用的日志服
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-16
 * @version    : v1.0
 */
@Injectable()
export class ProdLoggerService extends LoggerService {

}

/**
 * 工厂构造函数，注意一定要是 export function!!
 * 调试状态使用DebugLoggerService 发布状态使用 ProdLoggerService
 * @returns {LoggerService}
 */
export function loggerServiceFactory() {
    if (environment.production) {
        return new ProdLoggerService();
    } else {
        return new DebugLoggerService();
    }
}

//工厂提供商
export let loggerServiceProvider = {
    provide: LoggerService,
    useFactory: loggerServiceFactory,
    deps: []
};
