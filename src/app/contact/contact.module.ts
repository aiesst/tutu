import {NgModule} from '@angular/core';

import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from "./contact-routing.module";
import {ContactService} from "./contact.service";

@NgModule({
  imports: [ContactRoutingModule],
  exports: [ContactComponent],
  declarations: [
    ContactComponent
  ],
  providers:[ContactService]
})
export class ContactModule {
  constructor(){
  }
}
