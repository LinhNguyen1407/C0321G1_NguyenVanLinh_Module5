import { Component, OnInit} from '@angular/core';
import {Customer} from "../../customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  p: number = 1;

  customerList: Customer[] = [
    {
      id: 1,
      code: 'KH-0001',
      name: 'Nguyễn Văn A',
      birthday: '2000-09-02',
      gender: '1',
      idCard: '123222333',
      phone: '0988223344',
      email:'a@gmail.com',
      address: 'ĐN',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      id: 2,
      code: 'KH-0002',
      name: 'Nguyễn Thị B',
      birthday: '2000-10-02',
      gender: '0',
      idCard: '123222999',
      phone: '0932225511',
      email:'b@gmail.com',
      address: 'ĐN',
      customerType: {
        id: 2,
        name: 'Gold'
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
