"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_routing_module_1 = require("../../app-routing.module");
var core_1 = require("@angular/core");
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
var LoginGuard = (function () {
    function LoginGuard(httpAccountService, router, logger) {
        this.httpAccountService = httpAccountService;
        this.router = router;
        this.logger = logger;
    }
    LoginGuard.prototype.canLoad = function (route) {
        return this.checkLogin(route.path);
    };
    LoginGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    LoginGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    LoginGuard.prototype.checkLogin = function (url) {
        this.logger.log("守卫者 iaAcountLogin", this.httpAccountService.isAccountLogin);
        //调试的时候不用验证
        if (this.httpAccountService.isAccountLogin) {
            this.logger.log("为真?");
            return true;
        }
        //保存登录界面之前的路由，用户登录了之后直接跳转到之前的路由，而不用跳转到主页
        this.httpAccountService.redirectUrl = url;
        this.router.navigate([app_routing_module_1.AppRouter.login]);
        return false;
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    core_1.Injectable()
], LoginGuard);
exports.LoginGuard = LoginGuard;
