import {NgModule} from '@angular/core';

import {TestComponent} from './test.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: TestComponent
  }])],
})

export class TestRoutingModule {
   constructor(){
   }
}
