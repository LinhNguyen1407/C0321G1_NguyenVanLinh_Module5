import { Component, OnInit } from '@angular/core';
import {Customer} from "../../customer";
import {CustomerService} from "../../serviceApp/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  customer: Customer;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.getCustomer(this.id);
  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customer = customer;
    })
  }

  deleteAfterDetail(id: number, name: string) {
    if (confirm("Are you sure to delete " + name)) {
      this.customerService.delete(id).subscribe(() => {
        this.router.navigateByUrl('customer/list')
      })
    }
  }
}
