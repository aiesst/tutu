//主页
import {Component, OnInit, AfterViewInit} from '@angular/core';

import {AppComponent} from "../app.component";
import {PageService} from "../core/service/page.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WeixinLogin} from "../core/weixin/login.model";
import {LoggerService} from "../core/service/logger.service";
import {HomeService} from "./home.service";
import {isNullOrUndefined} from "util";
import {TravelBooking, ContactUs} from "./home.model";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {


    travelBooking: TravelBooking = new TravelBooking();
    contactUs: ContactUs = new ContactUs();
    isLoading:boolean = true;

    constructor(private  pageService: PageService,
                private route: ActivatedRoute,
                private logger: LoggerService,
                private router: Router,
                private homeService: HomeService,
             ) {
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


    ngOnInit(): void {
        this.homeService.testAutoLogin();
    }

    /**
     * fixme 在html中设置 routeLink无效，所以用点击事件导航
     * 不能使用href不然会重新加载
     * @param url
     */
    navByRouter(url:string){
        this.router.navigate([url]);
    }

    ngAfterViewInit(): void {
        this.initRollEffect();
        if (!isNullOrUndefined(this.homeService.getHttpAccountName())) {
            $("#login_action").html("欢迎, " + this.homeService.getHttpAccountName());
            $("#login_action").attr("href", "#");
        }
       //  $('#submitTravleBookBtn').ladda("start");


    }

    submitTravelBooking() {
        this.homeService.submitTravelBooking(this.travelBooking).subscribe(isSubmited => {
            swal(
                '感谢您的提交',
                '',
                'success'
            ).then(() => {
            });
        }, error => {
            this.logger.error(error);
        })
    }

    submitContactUs() {
        this.homeService.submitContactUs(this.contactUs).subscribe(isOk => {
            if (isOk) {
                swal(
                    '感谢您的提交',
                    '',
                    'success'
                )
            }
        }, error => {
            this.logger.error(error);
        })
    }

    private  initRollEffect(): void {
        $('nav').delay(0).css({'display': 'inline'});
        let jq: any = $;
        jq('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 300);
                    return false;
                }
            }
        });


    }
}





