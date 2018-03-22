"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * 页面服务类，主要用于设置页面的背景等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
var PageService = (function () {
    function PageService() {
    }
    PageService.prototype.setBackground = function (imageName) {
        imageName = "../assets/img/" + imageName;
        this.currentBackground = $.backstretch([imageName]);
    };
    /**
     * 清除背景
     */
    PageService.prototype.clearBackground = function () {
        try {
            this.currentBackground.destroy(false);
        }
        catch (e) {
        }
    };
    return PageService;
}());
PageService = __decorate([
    core_1.Injectable()
], PageService);
exports.PageService = PageService;
