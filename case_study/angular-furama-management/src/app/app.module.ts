import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { CreateContractDetailComponent } from './contract-detail/create-contract-detail/create-contract-detail.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ListContractComponent,
    CreateContractComponent,
    CreateContractDetailComponent,
    ListServiceComponent,
    CreateServiceComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
