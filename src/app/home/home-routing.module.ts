import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HomeService} from "./home.service";

/**
 * 主页路由模块，默认启动路由
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '', component: HomeComponent,
        }])],
    // providers: [HomeService],
})
export class HomeRoutingModule {
}
