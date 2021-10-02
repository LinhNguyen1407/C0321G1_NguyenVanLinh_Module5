import { Injectable } from '@angular/core';
import {Customer, CustomerType} from "../customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_URL = 'http://localhost:3000/customers';
  private API_URL_TYPE = 'http://localhost:3000/customerTypes';

  constructor(private  http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  getAllBySort(value: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + '?_sort='+ value + '&_order=asc');
  }

  getCustomerTypes(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_URL_TYPE);
  }

  save(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + '/' + id);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.API_URL + '/' + id, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URL + '/' + id);
  }

  findByName(value: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + '?name_like=' + value);
  }

  findByCode(value: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + '?code_like=' + value);
  }

  findByIdCard(value: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + '?idCard_like=' + value);
  }
}
