import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";
import {HomeComponent} from "./home/home.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./employee/update-employee/update-employee.component";


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
    path: 'customer/edit', component: UpdateCustomerComponent
  },
  {
    path: 'employee/list', component: ListEmployeeComponent
  },
  {
    path: 'employee/create', component: CreateEmployeeComponent
  },
  {
    path: 'employee/edit', component: UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
