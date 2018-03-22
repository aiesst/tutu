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
import { RouterModule } from "@angular/router";
import { ServiceComponent } from "./service.component";
export var ServiceRoutingModule = (function () {
    function ServiceRoutingModule() {
    }
    ServiceRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild([{
                        path: 'service', component: ServiceComponent
                    }])
            ],
            exports: [],
            declarations: [],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceRoutingModule);
    return ServiceRoutingModule;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/service/service-routing.module.js.map