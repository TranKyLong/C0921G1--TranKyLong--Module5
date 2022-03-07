import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AddNewCustomerComponent} from './add-new-customer/add-new-customer.component';
import {AddNewServiceComponent} from './add-new-service/add-new-service.component';
import {AddNewContractComponent} from './add-new-contract/add-new-contract.component';
import {ServiceListComponent} from './service-list/service-list.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewCustomerComponent,
    AddNewServiceComponent,
    AddNewContractComponent,
    ServiceListComponent,
    CustomerListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
