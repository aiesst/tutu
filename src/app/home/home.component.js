"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//主页
var core_1 = require('@angular/core');
var login_model_1 = require("../core/weixin/login.model");
var HomeComponent = (function () {
    function HomeComponent(pageService, route, logger, router, homeService) {
        this.pageService = pageService;
        this.route = route;
        this.logger = logger;
        this.router = router;
        this.homeService = homeService;
        //设置背景
        this.pageService.setBackground("home-bg.jpg");
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        $('#qrcode').qrcode("this plugin is great");
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.map(function (params) {
            var code = params['code'];
            var state = params['state'];
            return new login_model_1.WeixinLogin(code, state);
        }).subscribe(function (wxLogin) {
            //来自微信的请求登录链接
            if (wxLogin.isEnable()) {
                _this.homeService.loginByWeixin(wxLogin);
            }
            else {
                _this.logger.log("普通链接");
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
