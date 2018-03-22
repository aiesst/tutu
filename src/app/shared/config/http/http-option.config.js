"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
/**
 * 自定义http请求的头部信息，比如：json,auth等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-09
 * @version    : v1.0
 */
var TuTuRequestOptions = (function (_super) {
    __extends(TuTuRequestOptions, _super);
    function TuTuRequestOptions() {
        var _this = _super.call(this) || this;
        _this.headers.append('Content-Type', 'application/json');
        return _this;
    }
    // withCredentials: true;
    TuTuRequestOptions.prototype.appendToHeader = function (key, value) {
        this.headers.append(key, value);
    };
    TuTuRequestOptions.prototype.setHeader = function (key, value) {
        this.headers.set(key, value);
    };
    TuTuRequestOptions.prototype.deleteHeader = function (key) {
        this.headers["delete"](key);
    };
    TuTuRequestOptions.prototype.getHeaders = function () {
        return this.headers;
    };
    return TuTuRequestOptions;
}(http_1.BaseRequestOptions));
TuTuRequestOptions = __decorate([
    core_1.Injectable()
], TuTuRequestOptions);
exports.TuTuRequestOptions = TuTuRequestOptions;
