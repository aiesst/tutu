import {NgModule} from '@angular/core';

import {PageNotFoundComponent} from './404/page-not-found.component';
import {RouterModule} from "@angular/router";
import {ErrorPageComponent} from "./error-page.component";

@NgModule({
  imports: [RouterModule.forChild([{
    path: 'error',
    component: ErrorPageComponent,
    children: [{
      path: "404",
      component: PageNotFoundComponent
    },
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      }]
  },
      {
    path: "**",
    redirectTo: "error/404",
    pathMatch: "full"

  }

  ])],


})
export class ErrorPageRoutingModule {
}
