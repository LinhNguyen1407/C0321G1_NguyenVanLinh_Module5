import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../customer";
import {CustomerService} from "../../serviceApp/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
    this.getCustomerTypes();
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.customerForm = new FormGroup({
      code: new FormControl(''),
      name: new FormControl(''),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      idCard: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      customerType: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm.setValue(customer)
    })
  }

  getCustomerTypes() {
    this.customerService.getCustomerTypes().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
      this.getCustomer(this.id);
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.update(id, customer).subscribe(() => {
      this.router.navigateByUrl('customer/list');
      this.toast.success("Update customer " + customer.name + " successfully !");
    });
  }
}
