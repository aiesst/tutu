import {NgModule} from '@angular/core';

import {ContactComponent} from './contact.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([{
    path: 'contact',
    component: ContactComponent
  }])],

})
export class ContactRoutingModule {
}
