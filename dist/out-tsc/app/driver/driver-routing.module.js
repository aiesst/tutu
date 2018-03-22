var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { DriverComponent } from './driver.component';
import { RouterModule } from "@angular/router";
import { DriverRegisterComponent } from "./register/register.component";
import { LoginGuard } from "../core/guard/login-guard.service";
/**
 * driver的子路由需要登录才能访问
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */
export var DriverRoutingModule = (function () {
    function DriverRoutingModule() {
    }
    DriverRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild([{
                        path: '',
                        component: DriverComponent,
                        children: [{
                                //只有登录了才能访问 register
                                path: 'register',
                                component: DriverRegisterComponent,
                                canActivate: [LoginGuard],
                            }]
                    }])]
        }), 
        __metadata('design:paramtypes', [])
    ], DriverRoutingModule);
    return DriverRoutingModule;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/driver/driver-routing.module.js.map