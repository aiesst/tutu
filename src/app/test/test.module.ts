import {NgModule} from '@angular/core';

import {TestComponent} from './test.component';
import {TestRoutingModule} from "./test-routing.module";
import {Http, Headers} from "@angular/http";
import {RestfulServerRouter} from "../shared/config/http/http-router.config";
import {TuTuRequestOptions} from "../shared/config/http/http-option.config";
import {RxService} from "../core/service/rx-service";
import {environment} from "../../environments/environment";

@NgModule({
    imports: [TestRoutingModule],
    exports: [],
    declarations: [TestComponent],
    providers: [],
})
export class TestModule {
    constructor(http: Http, requestOptions: TuTuRequestOptions, rxService: RxService) {
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
}
