import { NgModule } from '@angular/core';
import {ServiceRoutingModule} from "./service-routing.module";
import {ServiceComponent} from "./service.component";


@NgModule({
    imports: [ServiceRoutingModule],
    exports: [ServiceComponent],
    declarations: [ServiceComponent],
    providers: [],
})
export class ServiceModule {

}
