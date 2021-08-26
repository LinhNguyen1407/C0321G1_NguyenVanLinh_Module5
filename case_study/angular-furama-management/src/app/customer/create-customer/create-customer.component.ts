import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../serviceApp/customer.service";
import {CustomerType} from "../../customer";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl(''),
      name: new FormControl(''),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      customerType: new FormControl(''),
      idCard: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getCustomerTypes();
  }

  createCustomer() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
    this.router.navigateByUrl('customer/list')
  }

  getCustomerTypes() {
    this.customerTypes = this.customerService.getCustomerTypes();
  }
}
