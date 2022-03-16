import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {NhapHangComponent} from './nhap-hang/nhap-hang.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'nhaphang', component: NhapHangComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
