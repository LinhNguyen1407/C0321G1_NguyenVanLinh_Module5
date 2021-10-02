import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";
import {HomeComponent} from "./home/home.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./employee/update-employee/update-employee.component";
import {ListServiceComponent} from "./service/list-service/list-service.component";
import {CreateServiceComponent} from "./service/create-service/create-service.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {CreateContractDetailComponent} from "./contract-detail/create-contract-detail/create-contract-detail.component";
import {DetailCustomerComponent} from "./customer/detail-customer/detail-customer.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'customer/list', component: ListCustomerComponent
  },
  {
    path: 'customer/create', component: CreateCustomerComponent
  },
  {
    path: 'customer/edit/:id', component: UpdateCustomerComponent
  },
  {
    path: 'customer/detail/:id', component: DetailCustomerComponent
  },
  {
    path: 'employee/list', component: ListEmployeeComponent
  },
  {
    path: 'employee/create', component: CreateEmployeeComponent
  },
  {
    path: 'employee/edit/:id', component: UpdateEmployeeComponent
  },
  {
    path: 'service/list', component: ListServiceComponent
  },
  {
    path: 'service/create', component: CreateServiceComponent
  },
  {
    path: 'contract/list', component: ListContractComponent
  },
  {
    path: 'contract/create', component: CreateContractComponent
  },
  {
    path: 'contract-detail/create', component: CreateContractDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
