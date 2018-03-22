import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild,
    CanLoad, Route
} from "@angular/router";
import {Observable} from "rxjs";
import {HttpAccountService} from "../account/account.service";
import {AppRouter} from "../../app-routing.module";
import {LoggerService} from "../service/logger.service";
import {logger} from "codelyzer/util/logger";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

/**
 * 只有用户登录了才能激活路由
 *  使用方法：
 *      在routing里面添加(保护当前路由)
 *              canActivate: [LoginGuard],
 *       或者 保护（当前路由下面的子路由）
 *               canActivateChild: [LoginGuard],

 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */
@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild,CanLoad {
    canLoad(route: Route): boolean {
        return this.checkLogin(route.path);
    }

    constructor(private httpAccountService: HttpAccountService, private router: Router, private logger: LoggerService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
        return this.checkLogin(state.url);
    }


    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        this.logger.log("守卫者 iaAcountLogin",this.httpAccountService.isAccountLogin);
        //调试的时候不用验证
        if ( this.httpAccountService.isAccountLogin) {
            this.logger.log("为真?");
            return true;
        }
        //保存登录界面之前的路由，用户登录了之后直接跳转到之前的路由，而不用跳转到主页
        this.httpAccountService.redirectUrl = url;
        this.router.navigate([AppRouter.login]);
        return false;
    }
}