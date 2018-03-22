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
import { PageNotFoundComponent } from './404/page-not-found.component';
import { RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./error-page.component";
export var ErrorPageRoutingModule = (function () {
    function ErrorPageRoutingModule() {
    }
    ErrorPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild([{
                        path: 'error',
                        component: ErrorPageComponent,
                        children: [{
                                path: "404",
                                component: PageNotFoundComponent
                            },
                            {
                                path: '**',
                                redirectTo: '404',
                                pathMatch: 'full'
                            }]
                    },
                    {
                        path: "**",
                        redirectTo: "error/404",
                        pathMatch: "full"
                    }
                ])],
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorPageRoutingModule);
    return ErrorPageRoutingModule;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/error/error-page-routing.module.js.map