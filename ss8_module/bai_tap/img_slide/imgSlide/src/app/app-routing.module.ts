import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SlideComponent} from "./img-slide/slide/slide.component";

const routes: Routes = [{
  path: 'img/:page', component: SlideComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
