import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {NgModule} from "@angular/core";
import {PreloadSelectedModules} from "./core/model/preload-selected-modules.model";
import {LoginGuard} from "./core/guard/login-guard.service";


//程序启动路由，只用来配置默认路由和懒加载模块，其余特性路由到特性文件夹配置
//记得同步手动修改 AppRouter
@NgModule({
    imports: [RouterModule.forRoot([

        {
            path: '',
            loadChildren: 'app/home/home.module#HomeModule',
            data: {
                preload: false
            }

        },
        {
            path: "login",
            loadChildren: 'app/login/login.module#LoginModule',
            data: {
                preload: false
            }

        },

        {

            path:"driver",
            loadChildren: 'app/driver/driver.module#DriverModule',
            data: {
                preload: false
            }

        }, {
            path: "test",
            loadChildren: 'app/test/test.module#TestModule',
            data: {
                preload: false
            }
        }

    ], {preloadingStrategy: PreloadSelectedModules})],
    providers: [PreloadSelectedModules],
    exports: [RouterModule]
})


export class AppRoutingModule {
}

/**
 * 程序路由
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 17/1/23
 * @version    : v1.0
*/
export class AppRouter {
    static readonly home = "/";
    static readonly login = "/login";
    static readonly driver = "driver";
    static readonly test = "/test";
}
