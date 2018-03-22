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
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Contact } from "./contact";
import { RestfulServerRouter } from "../shared/config/http/http-router.config";
/**
 * 获取联系信息服务
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
export var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.headers = new Headers();
        this.contact = new Contact();
        this.contact.name = "kevin";
        this.contact.email = "kevin@gmail.com";
        this.contact.phoneNum = "18482843";
        this.contact.message = "hello world";
    }
    ContactService.prototype.get = function () {
        return this.http.post(RestfulServerRouter.connectUs, JSON.stringify(this.contact))
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    };
    ContactService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], ContactService);
    return ContactService;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/contact/contact.service.js.map