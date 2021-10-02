import { Component, OnInit} from '@angular/core';
import {CustomerService} from "../../serviceApp/customer.service";
import {Customer} from "../../customer";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  p: number;
  customers: Customer[] = [];
  sortKey: any;
  searchKey: any;

  constructor(private customerService: CustomerService,
              private router: Router,
              private toast: ToastrService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  delete(id: number, name: string) {
    if (confirm("Are you sure to delete " + name)) {
      this.customerService.delete(id).subscribe(() => {
        this.getAll();
        this.ngOnInit();
        this.p = 1;
        this.toast.success("Delete customer " + name + " successfully !");
      })
    }
  }

  search(searchKey: any) {
    searchKey = typeof searchKey === "undefined" ? '': searchKey;
    this.customerService.findByName(searchKey).subscribe(listByName => {
      this.customers = listByName;
      if (this.customers.length == 0) {
        this.customerService.findByIdCard(searchKey).subscribe(listByIdCard => {
          this.customers = listByIdCard;
        });
      }
      this.ngOnInit();
      this.p = 1;
    });
  }

  sort(sortKey: any) {
    sortKey = typeof sortKey === "undefined" ? '': sortKey;
    this.customerService.getAllBySort(sortKey).subscribe( customers => {
      this.customers = customers;
      this.ngOnInit();
      this.p = 1;
    })
  }
}
