"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var test_component_1 = require('./test.component');
var test_routing_module_1 = require("./test-routing.module");
var TestModule = (function () {
    function TestModule() {
        console.log("test 加载成功");
    }
    TestModule = __decorate([
        core_1.NgModule({
            imports: [test_routing_module_1.TestRoutingModule],
            exports: [],
            declarations: [test_component_1.TestComponent],
            providers: []
        })
    ], TestModule);
    return TestModule;
}());
exports.TestModule = TestModule;
