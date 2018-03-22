var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoggerService } from "../service/logger.service";
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
export var PreloadSelectedModules = (function () {
    function PreloadSelectedModules(logger) {
        this.logger = logger;
        this.preloadedModules = [];
    }
    PreloadSelectedModules.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return Observable.of(null);
        }
    };
    PreloadSelectedModules = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService])
    ], PreloadSelectedModules);
    return PreloadSelectedModules;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/model/preload-selected-modules.model.js.map