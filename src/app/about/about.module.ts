import { NgModule } from '@angular/core';
import {AboutRoutingModule} from "./about-routing.module";
import {AboutComponent} from "./about.component";


@NgModule({
    imports: [AboutRoutingModule],
    exports: [AboutComponent],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule {

}
