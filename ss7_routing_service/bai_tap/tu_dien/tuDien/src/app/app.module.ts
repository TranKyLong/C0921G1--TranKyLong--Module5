import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
