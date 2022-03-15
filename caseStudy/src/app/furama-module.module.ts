import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServiceListComponent} from './component/service/service-list/service-list.component';
import {EditServiceComponent} from './component/service/edit-service/edit-service.component';
import {AddNewServiceComponent} from './component/service/add-new-service/add-new-service.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {AddNewCustomerComponent} from './component/customer/add-new-customer/add-new-customer.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {EditEmployeeComponent} from './component/employee/edit-employee/edit-employee.component';
import {EmployeeListComponent} from './component/employee/employee-list/employee-list.component';
import {AddNewEmployeeComponent} from './component/employee/add-new-employee/add-new-employee.component';
import {AddNewContractComponent} from './component/contract/add-new-contract/add-new-contract.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';


const routes: Routes = [{
  path: '',
  component: ServiceListComponent
}, {
  path: 'service',
  children: [
    {path: 'edit/:id', component: EditServiceComponent},
    {path: 'create', component: AddNewServiceComponent}
  ]
},
  {
    path: 'customer',
    children: [
      {path: 'edit/:id', component: EditCustomerComponent},
      {path: 'list', component: CustomerListComponent},
      {path: 'create', component: AddNewCustomerComponent}
    ]
  },
  {
    path: 'employee',
    children: [
      {path: 'edit/:id', component: EditEmployeeComponent},
      {path: 'list', component: EmployeeListComponent},
      {path: 'create', component: AddNewEmployeeComponent}
    ]
  },
  {
    path: 'contract',
    children: [
      {path: 'create/:id', component: AddNewContractComponent},
      {path: 'list', component: ContractListComponent}
    ]
  }
];

@NgModule({

  exports: [RouterModule],
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ]
})
export class FuramaModuleModule {
}
