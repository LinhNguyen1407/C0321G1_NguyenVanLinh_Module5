import { Component, OnInit} from '@angular/core';
import {CustomerService} from "../../serviceApp/customer.service";
import {Customer} from "../../customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  p: number = 1;
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.customers = this.customerService.getAll();
  }
}
