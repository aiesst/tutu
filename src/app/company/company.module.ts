import { NgModule } from '@angular/core';
import {CompanyRoutingModule} from "./company-routing.module";
import {CompanyComponent} from "./company.component";


@NgModule({
    imports: [CompanyRoutingModule],
    exports: [CompanyComponent],
    declarations: [CompanyComponent],
    providers: [],
})
export class CompanyModule {

}
