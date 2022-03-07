import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, Routes} from '@angular/router';
// tslint:disable-next-line:no-unused-expression
const routes: Routes = [
  // {path: 'edit-service', component: }
  {path: '', pathMatch: 'full', redirectTo: 'service-list'},
  // {path: 'edit-service',  component: }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingFuramaModule {
}
