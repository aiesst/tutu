import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './404/page-not-found.component';
import {ErrorPageRoutingModule} from "./error-page-routing.module";
import {ErrorPageComponent} from "./error-page.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [ErrorPageRoutingModule,CommonModule,RouterModule],
    exports: [ErrorPageComponent],
    declarations: [PageNotFoundComponent,ErrorPageComponent],

})
export class ErrorPageModule {
  constructor(){
  }
}
