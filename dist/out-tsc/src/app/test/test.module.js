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
import { TestComponent } from './test.component';
import { TestRoutingModule } from "./test-routing.module";
import { Http } from "@angular/http";
import { TuTuRequestOptions } from "../shared/config/http/http-option.config";
import { RxService } from "../core/service/rx-service";
export var TestModule = (function () {
    function TestModule(http, requestOptions, rxService) {
        // if (!environment.production) {
        //     let base64Token: string = "Basic " + btoa("hello:world");
        //     requestOptions.setHeader("Authorization", base64Token);
        //     let header = new Headers();
        //     header.set("Authorization", base64Token);
        //     console.log("header", requestOptions.headers);
        //     http.get(RestfulServerRouter.checkUserExist + "?phoneNum=183804661672", {headers: header}).map(rxService.serverSignalDataMap).subscribe(data => {
        //             console.log(data);
        //         }, error => console.error(error)
        //     )
        // }
    }
    TestModule = __decorate([
        NgModule({
            imports: [TestRoutingModule],
            exports: [],
            declarations: [TestComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [Http, TuTuRequestOptions, RxService])
    ], TestModule);
    return TestModule;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/test/test.module.js.map