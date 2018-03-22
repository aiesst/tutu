"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
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
var PreloadSelectedModules = (function () {
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
            return rxjs_1.Observable.of(null);
        }
    };
    return PreloadSelectedModules;
}());
PreloadSelectedModules = __decorate([
    core_1.Injectable()
], PreloadSelectedModules);
exports.PreloadSelectedModules = PreloadSelectedModules;
