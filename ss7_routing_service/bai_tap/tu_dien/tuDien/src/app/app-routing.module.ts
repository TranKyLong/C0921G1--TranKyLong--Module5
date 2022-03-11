import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WordComponent} from "./word/word.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";


const routes: Routes = [{
  path: '',
  component: WordComponent
}, {
  path: 'word',
  children: [
    {path: 'meaning/:id', component: DictionaryComponent}

  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule {
}
