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
import { PageService } from "../core/service/page.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LoggerService } from "../core/service/logger.service";
import { HomeService } from "./home.service";
import { isNullOrUndefined } from "util";
import { TravelBooking, ContactUs } from "./home.model";
export var HomeComponent = (function () {
    function HomeComponent(pageService, route, logger, router, homeService) {
        this.pageService = pageService;
        this.route = route;
        this.logger = logger;
        this.router = router;
        this.homeService = homeService;
        this.travelBooking = new TravelBooking();
        this.contactUs = new ContactUs();
        this.isLoading = true;
        // this.travelBooking.nikeName = "hello";
        // this.travelBooking.phoneNum = "18389461672";
        // this.travelBooking.date = "2017-01-01";
        // this.travelBooking.starting="成都";
        // this.travelBooking.destination="成都";
        // this.travelBooking.remark="备注";
        // this.contactUs.email = "tutu@tutu.com";
        // this.contactUs.message = "hello world";
        // this.contactUs.name = "tutu";
        // this.contactUs.phoneNum = "18380461672";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.homeService.testAutoLogin();
    };
    /**
     * fixme 在html中设置 routeLink无效，所以用点击事件导航
     * 不能使用href不然会重新加载
     * @param url
     */
    HomeComponent.prototype.navByRouter = function (url) {
        this.router.navigate([url]);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.initRollEffect();
        if (!isNullOrUndefined(this.homeService.getHttpAccountName())) {
            $("#login_action").html("欢迎, " + this.homeService.getHttpAccountName());
            $("#login_action").attr("href", "#");
        }
        //  $('#submitTravleBookBtn').ladda("start");
    };
    HomeComponent.prototype.submitTravelBooking = function () {
        var _this = this;
        this.homeService.submitTravelBooking(this.travelBooking).subscribe(function (isSubmited) {
            swal('感谢您的提交', '', 'success').then(function () {
            });
        }, function (error) {
            _this.logger.error(error);
        });
    };
    HomeComponent.prototype.submitContactUs = function () {
        var _this = this;
        this.homeService.submitContactUs(this.contactUs).subscribe(function (isOk) {
            if (isOk) {
                swal('感谢您的提交', '', 'success');
            }
        }, function (error) {
            _this.logger.error(error);
        });
    };
    HomeComponent.prototype.initRollEffect = function () {
        $('nav').delay(0).css({ 'display': 'inline' });
        var jq = $;
        jq('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 300);
                    return false;
                }
            }
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [PageService, ActivatedRoute, LoggerService, Router, HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/home/home.component.js.map