import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CompanyComponent} from "./company.component";


@NgModule({
  imports: [
    RouterModule.forChild([{
     path: 'company', component: CompanyComponent
    }])

  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class CompanyRoutingModule {

}
