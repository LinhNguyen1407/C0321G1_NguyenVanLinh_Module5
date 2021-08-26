import { Injectable } from '@angular/core';
import {Customer, CustomerType} from "../customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerTypes: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Gold'},
    {id: 3, name: 'Silver'}
  ]

  customers: Customer[] = [
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

  getAll() {
    return this.customers;
  }

  getCustomerTypes() {
    return this.customerTypes;
  }

  saveCustomer(customer) {
    this.customers.push(customer);
  }

  findById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  updateCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;
      }
    }
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(customer => {
      return customer.id !== id;
    });
  }
}
