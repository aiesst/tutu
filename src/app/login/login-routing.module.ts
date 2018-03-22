import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {RouterModule} from "@angular/router";
import {LoginService} from "./login.service";

@NgModule({
    imports: [RouterModule.forChild([{
        path: "",
        component: LoginComponent
    }])],
    providers:[LoginService]

})
export class LoginRoutingModule {
}
