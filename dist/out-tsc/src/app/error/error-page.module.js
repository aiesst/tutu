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
import { ErrorPageRoutingModule } from "./error-page-routing.module";
import { ErrorPageComponent } from "./error-page.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
export var ErrorPageModule = (function () {
    function ErrorPageModule() {
    }
    ErrorPageModule = __decorate([
        NgModule({
            imports: [ErrorPageRoutingModule, CommonModule, RouterModule],
            exports: [ErrorPageComponent],
            declarations: [PageNotFoundComponent, ErrorPageComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorPageModule);
    return ErrorPageModule;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/error/error-page.module.js.map