import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../serviceApp/customer.service";
import {Customer, CustomerType} from "../../customer";
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  msg: any;

  constructor(private customerService: CustomerService,
              private router: Router,
              private toast: ToastrService) {
    this.customerForm = new FormGroup({
      code: new FormControl('',
        [Validators.required,
          Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getCustomerTypes();
  }

  createCustomer() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(() => {
      this.router.navigateByUrl('customer/list');
      this.toast.success("Create new customer " + customer.name + " successfully !");
    });
  }

  getCustomerTypes() {
    this.customerService.getCustomerTypes().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  checkAge(birthdayControl: AbstractControl): any {
    const birthday = birthdayControl.value;
    const birthOfYear = Number(birthday.substr(0,4));
    const currentYear = new Date().getFullYear();
    return currentYear - birthOfYear >= 18 ? null: {invalidAge : true};
  }

  checkDuplicateCode(code: string) {
    this.customerService.findByCode(code).subscribe(data => {
      if (data.length > 0) {
        return this.msg = 'duplicate code';
      } else {
        return this.msg = '';
      }
    });
  }
}
