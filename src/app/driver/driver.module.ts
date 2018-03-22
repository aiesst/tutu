
import {NgModule} from '@angular/core';

import {DriverComponent} from './driver.component';

import {DriverRegisterComponent} from "./register/register.component";
import {RouterModule} from "@angular/router";


import {DriverRoutingModule} from "./driver-routing.module";
import {SharedModule} from "../shared/shared.module";
import {DriverRegisterService} from "./register/register.service";


@NgModule({
  imports: [
    DriverRoutingModule,
    RouterModule,
    SharedModule,

  ],
  declarations: [DriverRegisterComponent, DriverComponent],
  providers:[DriverRegisterService]

})
export class DriverModule {
  constructor(){
  }
}
