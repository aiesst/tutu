import {NgModule} from '@angular/core';

import {DriverComponent} from './driver.component';
import {RouterModule} from "@angular/router";
import {DriverRegisterComponent} from "./register/register.component";
import {LoginGuard} from "../core/guard/login-guard.service";

/**
 * driver的子路由需要登录才能访问
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
 */

@NgModule({
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
})
export class DriverRoutingModule {

}
