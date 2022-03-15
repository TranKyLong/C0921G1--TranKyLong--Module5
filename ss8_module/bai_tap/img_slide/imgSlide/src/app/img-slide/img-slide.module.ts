import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideComponent} from './slide/slide.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [

    SlideComponent
  ],
  exports: [
    SlideComponent
  ],
  imports: [

    CommonModule,
    RouterModule
  ]
})
export class ImgSlideModule {
}
