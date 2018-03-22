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
/**
 * 页面服务类，主要用于设置页面的背景等等
 *
 * @author     : ychost<c.yang@aiesst.com>
 * @date       : 2017-01-17
 * @version    : v1.0
 */
export var PageService = (function () {
    function PageService() {
    }
    PageService.prototype.setBackground = function (imageName) {
        imageName = "../assets/img/" + imageName;
        var jq = $;
        this.currentBackground = jq.backstretch([imageName]);
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
    PageService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], PageService);
    return PageService;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/service/page.service.js.map