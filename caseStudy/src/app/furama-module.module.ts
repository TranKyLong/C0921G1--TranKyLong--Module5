import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {ServiceListComponent} from './service-list/service-list.component';
import {EditServiceComponent} from './edit-service/edit-service.component';


const routes: Routes = [{
  path: '',
  component: ServiceListComponent
}, {
  path: 'service',
  children: [
    // {path: 'delete/:id', component: ProductDeleteComponent},
    {path: 'edit/:id', component: EditServiceComponent},

  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FuramaModuleModule {
}
