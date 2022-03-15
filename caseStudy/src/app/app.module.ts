import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AddNewCustomerComponent} from './component/customer/add-new-customer/add-new-customer.component';
import {AddNewServiceComponent} from './component/service/add-new-service/add-new-service.component';
import {AddNewContractComponent} from './component/contract/add-new-contract/add-new-contract.component';
import {FooterComponent} from './footer/footer.component';
import {Router, RouterModule} from '@angular/router';
import {EditServiceComponent} from './component/service/edit-service/edit-service.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ServiceListComponent} from './component/service/service-list/service-list.component';
import {FuramaModuleModule} from './furama-module.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {EmployeeListComponent} from './component/employee/employee-list/employee-list.component';
import {EditEmployeeComponent} from './component/employee/edit-employee/edit-employee.component';
import {AddNewEmployeeComponent} from './component/employee/add-new-employee/add-new-employee.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';
import {ArletComponent} from './arlet/arlet.component';


@NgModule({
  declarations: [EditEmployeeComponent,
    AddNewEmployeeComponent,
    EditCustomerComponent,
    CustomerListComponent,
    EditServiceComponent,
    AppComponent,
    HeaderComponent,
    AddNewCustomerComponent,
    AddNewServiceComponent,
    AddNewContractComponent,
    ServiceListComponent,
    FooterComponent,
    EmployeeListComponent,
    ContractListComponent,
    ArletComponent,



  ],
  imports: [
    FuramaModuleModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
