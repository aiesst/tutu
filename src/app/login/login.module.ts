import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {HttpAccountService} from "../core/account/account.service";
import {LoginService} from "./login.service";

@NgModule({
    imports: [LoginRoutingModule],
    declarations: [LoginComponent],

})
export class LoginModule {
}
