"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var contact_1 = require("./contact");
var restful_server_router_1 = require("../shared/config/restful-server-router");
/**
 * 获取联系信息服务
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.contact = new contact_1.Contact();
        this.contact.name = "kevin";
        this.contact.email = "kevin@gmail.com";
        this.contact.phoneNum = "18482843";
        this.contact.message = "hello world";
    }
    ContactService.prototype.get = function () {
        return this.http.post(restful_server_router_1.RestfulServerRouter.connectUs, JSON.stringify(this.contact))
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs_1.Observable.throw(errMsg);
    };
    ContactService = __decorate([
        core_1.Injectable()
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
