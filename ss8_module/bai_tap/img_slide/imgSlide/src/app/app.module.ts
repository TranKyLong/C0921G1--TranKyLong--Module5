import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ImgSlideModule} from "./img-slide/img-slide.module";
import {RouterModule, Routes} from "@angular/router";
import {SlideComponent} from "./img-slide/slide/slide.component";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImgSlideModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
