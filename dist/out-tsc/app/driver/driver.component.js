var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LoggerService } from "../core/service/logger.service";
export var DriverComponent = (function () {
    function DriverComponent(logService) {
        logService.log("hello wold");
        console.log("DriverComponet 加载成功 ");
    }
    DriverComponent.prototype.ngOnInit = function () {
    };
    DriverComponent = __decorate([
        Component({
            selector: 'app-driver',
            templateUrl: './driver.component.html',
            styleUrls: ['./driver.component.css']
        }), 
        __metadata('design:paramtypes', [LoggerService])
    ], DriverComponent);
    return DriverComponent;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/driver/driver.component.js.map